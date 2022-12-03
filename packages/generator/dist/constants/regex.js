"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRISMA_FUNCTION_TYPES_WITH_VALIDATORS = exports.DATE_VALIDATOR_NUMBER_AND_MESSAGE_REGEX = exports.NUMBER_VALIDATOR_MESSAGE_REGEX = exports.NUMBER_VALIDATOR_NUMBER_AND_MESSAGE_REGEX = exports.STRING_VALIDATOR_STRING_AND_MESSAGE_REGEX = exports.STRING_VALIDATOR_REGEX = exports.STRING_VALIDATOR_MESSAGE_REGEX = exports.STRING_VALIDATOR_NUMBER_AND_MESSAGE_REGEX = exports.VALIDATOR_CUSTOM_ERROR_KEYS_REGEX = exports.VALIDATOR_CUSTOM_ERROR_REGEX_ALT = exports.VALIDATOR_CUSTOM_ERROR_REGEX = exports.VALIDATOR_KEY_REGEX = exports.SPLIT_VALIDATOR_PATTERN_REGEX = exports.VALIDATOR_TYPE_REGEX = void 0;
exports.VALIDATOR_TYPE_REGEX = /@zod\.(?<type>string|number|bigint|date){1}(?<customErrors>\({[\w (),'":+\-*#!§$%&\/{}\[\]=?~><°^]+}\))?(?<validatorPattern>.*)?/;
exports.SPLIT_VALIDATOR_PATTERN_REGEX = /(\.[\w (),'":+\-*#!§$%&\/{}\[\]=?~><°^]+)/g;
exports.VALIDATOR_KEY_REGEX = /(\.(?<validatorKey>[\w]+))/;
exports.VALIDATOR_CUSTOM_ERROR_REGEX = /(\()(?<object>\{(?<messages>[\w (),'":+\-*#!§$%&\/{}\[\]=?~><°^]+)\})(\))/;
exports.VALIDATOR_CUSTOM_ERROR_REGEX_ALT = /(?<opening>\(\{)(?<messages>[\w,": ]+)(?<closing>\}\))/;
exports.VALIDATOR_CUSTOM_ERROR_KEYS_REGEX = /(?<message>invalid_type_error:[ ]?("|')[\w (),':+\-*#!§$%&\/{}\[\]=?~><°^]+("|')|required_error:[ ]?("|')[\w (),':+\-*#!§$%&\/{}\[\]=?~><°^]+("|')|description:[ ]?("|')[\w (),':+\-*#!§$%&\/{}\[\]=?~><°^]+("|'))/g;
exports.STRING_VALIDATOR_NUMBER_AND_MESSAGE_REGEX = /.(?<validator>min|max|length)(?<number>\([\d]+([,][ ]?)?(?<message>[{][ ]?message:[ ]?['"][\w\W]+['"][ ]?[}])?\))/;
exports.STRING_VALIDATOR_MESSAGE_REGEX = /.(?<validator>email|url|uuid|cuid|trim|datetime)(\((?<message>[{][ ]?message:[ ]?['"][\w\W]+['"][ ]?[}])?\))/;
exports.STRING_VALIDATOR_REGEX = /.(regex)(\((?<message>.*)\))/;
exports.STRING_VALIDATOR_STRING_AND_MESSAGE_REGEX = /.(?<validator>startsWith|endsWith)\((?<string>['"][\w\W]+['"])([,][ ]?)?(?<message>[{][ ]?message:[ ]?['"][\w\W]+['"][ ]?[}])?\)/;
exports.NUMBER_VALIDATOR_NUMBER_AND_MESSAGE_REGEX = /.(?<validator>gt|gte|lt|lte|multipleOf)(?<number>\([\d]+([,][ ]?)?(?<message>[{][ ]?message:[ ]?['"][\w\W]+['"][ ]?[}])?\))/;
exports.NUMBER_VALIDATOR_MESSAGE_REGEX = /.(?<validator>int|positive|nonnegative|negative|nonpositive|finite)(\((?<message>[{][ ]?message:[ ]?['"][\w\W]+['"][ ]?[}])?\))/;
exports.DATE_VALIDATOR_NUMBER_AND_MESSAGE_REGEX = /.(?<validator>min|max)(\()(?<date>(new Date\((['"\d-]+)?\)))([,][ ]?)?(?<message>[{][ ]?message:[ ]?['"][\w\W]+['"][ ]?[}])?\)/;
exports.PRISMA_FUNCTION_TYPES_WITH_VALIDATORS = /CreateInput|CreateMany|UpdateInput|UpdateMany/;
//# sourceMappingURL=regex.js.map