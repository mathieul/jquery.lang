/*
 * Type functions
 */
$.extend({
    /*
     * isNumber: checks if the parameter is a number
     */
    isNumber: function (val) { return typeof val === 'number' && isFinite(val); },

    /*
     * isString: checks if the parameter is a string
     */
    isString: function (val) { return typeof val === 'string'; },

    /*
     * isBoolean: checks if the parameter is a boolean
     */
    isBoolean: function (val) { return typeof val === 'boolean'; },

    /*
     * isDate: checks if the parameter is a date
     */
    isDate: function (val) {
        return !!val &&
        typeof val === 'object' &&
        typeof val.toUTCString === 'function' &&
        typeof val.toGMTString === 'function';
    },

    /*
     * isObject: checks if the parameter is a object
     */
    isObject: function (val) {
        return !!val &&
        (typeof val === 'object' ||
        $.isFunction(val));
    },

    /*
     * isRegExp: checks if the parameter is a RegExp
     */
    isRegExp: function (val) {
        return Object.prototype.toString.call(val) === "[object RegExp]";
    }
});

