var lang = $.lang = $.lang || {};

/*
* create_object: create an object using prototypal inheritance
*/
$.lang.create_object = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
};

/*
* is_array: checks if the parameter is an array
*/
$.lang.is_array = function (val) {
    return !!val &&
    typeof val === 'object' &&
    typeof val.length === 'number' &&
    typeof val.splice === 'function' &&
    !(val.propertyIsEnumerable('length'));
};

/*
* is_number: checks if the parameter is a number
*/
$.lang.is_number = function (val) { return typeof val === 'number' && isFinite(val); };

/*
* is_string: checks if the parameter is a string
*/
$.lang.is_string = function (val) { return typeof val === 'string'; };

/*
* is_function: checks if the parameter is a function
*/
$.lang.is_function = function (val) { return typeof val === 'function'; };

/*
* is_boolean: checks if the parameter is a boolean
*/
$.lang.is_boolean = function (val) { return typeof val === 'boolean'; };

/*
* is_date: checks if the parameter is a date
*/
$.lang.is_date = function (val) {
    return !!val &&
    typeof val === 'object' &&
    typeof val.toUTCString === 'function' &&
    typeof val.toGMTString === 'function';
};

/*
* is_object: checks if the parameter is a object
*/
$.lang.is_object = function (val) {
    return !!val &&
    (typeof val === 'object' ||
    $.lang.is_function(val));
};

/*
* is_regexp: checks if the parameter is a RegExp
*/
$.lang.is_regexp = function (val) {
    return !!val &&
    $.lang.is_object(val) &&
    val.constructor === RegExp;
};

/*
* is_undefined: checks if the parameter is undefined
*/
$.lang.is_undefined = function (val) { return typeof val === 'undefined' };

