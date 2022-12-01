import { DMMF } from '@prisma/generator-helper';

import { ExtendedDMMFSchemaArgInputType } from '.';
import { FormattedNames } from './formattedNames';

export interface ExtendedDMMFSchemaArgOptions extends DMMF.SchemaArg {
  zodValidatorString?: string;
  zodCustomErrors?: string;
}

/////////////////////////////////////////////////
// CLASS
/////////////////////////////////////////////////

export class ExtendedDMMFSchemaArg
  extends FormattedNames
  implements DMMF.SchemaArg
{
  name: DMMF.SchemaArg['name'];
  comment?: DMMF.SchemaArg['comment'];
  isNullable: DMMF.SchemaArg['isNullable'];
  isRequired: DMMF.SchemaArg['isRequired'];
  inputTypes: ExtendedDMMFSchemaArgInputType[];
  deprecation?: DMMF.SchemaArg['deprecation'];
  zodValidatorString?: string;
  zodCustomErrors?: string;
  hasSingleType: boolean;
  hasMultipleTypes: boolean;
  isOptional: boolean;
  isJsonType: boolean;
  isBytesType: boolean;

  constructor(arg: ExtendedDMMFSchemaArgOptions) {
    super(arg.name);
    this.name = arg.name;
    this.comment = arg.comment;
    this.isNullable = arg.isNullable;
    this.isRequired = arg.isRequired;
    this.inputTypes = this._setInputTypes(arg.inputTypes);
    this.deprecation = arg.deprecation;
    this.zodValidatorString = arg.zodValidatorString;
    this.zodCustomErrors = arg.zodCustomErrors;
    this.hasSingleType = this._setHasSingleType();
    this.hasMultipleTypes = this._setHasMultipleTypes();
    this.isOptional = this._setIsOptional();
    this.isJsonType = this._setIsJsonType();
    this.isBytesType = this._setIsBytesType();
  }

  private _setInputTypes = (inputTypes: DMMF.SchemaArgInputType[]) => {
    // filter "null" from the inputTypes array to prevent the generator
    // from generating a "null" type in a union field wiht the actual type
    // instead of e.g. a scalar type
    const nonNullTypes = inputTypes.filter((type) => type.type !== 'Null');

    // FIX: this is a hacky workaround to prevent the generator from
    // generating a union in the "GroupByArgs" at the "by" property.
    // this should be fixed in the prisma dmmf
    if (this.name === 'by') {
      return nonNullTypes
        .filter((inputType) => inputType.isList === true)
        .map((inputType) => {
          return new ExtendedDMMFSchemaArgInputType(inputType);
        });
    }

    return nonNullTypes.map((inputType) => {
      return new ExtendedDMMFSchemaArgInputType(inputType);
    });
  };

  private _setHasSingleType() {
    return this.inputTypes.length === 1;
  }

  private _setHasMultipleTypes() {
    return this.inputTypes.length > 1;
  }

  private _setIsOptional() {
    return !this.isRequired;
  }

  private _setIsJsonType() {
    return this.inputTypes.some((inputType) => inputType.isJsonType);
  }

  private _setIsBytesType() {
    return this.inputTypes.some((inputType) => inputType.isBytesType);
  }
}
