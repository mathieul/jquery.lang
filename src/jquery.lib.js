(function ($) {
    /*
     * Lib plugin: standard library
     */
    $.lib = $.lib || {};
     
    /*
     * lib.create_object: create an object using prototypal inheritance
     */
    $.lib.create_object = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
    
    /*
     * is_array: checks if the parameter is an array
     */
    $.lib.is_array = function (val) {
        return !!val &&
            typeof val === 'object' &&
            typeof val.length === 'number' &&
            typeof val.splice === 'function' &&
            !(val.propertyIsEnumerable('length'));
    };
     
    /*
     * is_number: checks if the parameter is a number
     */
    $.lib.is_number = function (val) { return typeof val === 'number' && isFinite(val); };

    /*
     * is_string: checks if the parameter is a string
     */
    $.lib.is_string = function (val) { return typeof val === 'string'; };
    
    /*
     * is_function: checks if the parameter is a function
     */
    $.lib.is_function = function (val) { return typeof val === 'function'; };

    /*
     * is_boolean: checks if the parameter is a boolean
     */
    $.lib.is_boolean = function (val) { return typeof val === 'boolean'; };

    /*
     * is_date: checks if the parameter is a date
     */
    $.lib.is_date = function (val) {
        return !!val &&
               typeof val === 'object' &&
               typeof val.toUTCString === 'function' &&
               typeof val.toGMTString === 'function';
    };

    /*
     * is_object: checks if the parameter is a object
     */
    $.lib.is_object = function (val) {
        return !!val &&
               (typeof val === 'object' ||
                $.lib.is_function(val));
    };

    /*
     * is_regexp: checks if the parameter is a RegExp
     */
    $.lib.is_regexp = function (val) {
        return !!val &&
               $.lib.is_object(val) &&
               val.constructor === RegExp;
    };

    /*
     * is_undefined: checks if the parameter is undefined
     */
    $.lib.is_undefined = function (val) { return typeof val === 'undefined' };

    /*
     * inject: Combines the elements of enumerable by applying the block
     *         to an accumulator value (memo) and each element in turn.
     *         At each step, memo is set to the value returned by the block.
     *         The first form lets you supply an initial value for memo.
     *         The second form uses the first element of the collection
     *         as a the initial value (and skips that element while iterating).
     */
    $.lib.inject = function (enumerable, memo, block) {
        if (typeof block === 'undefined') {
            block = memo;
            memo = 0;
        }
        $.each(enumerable, function (i, item) { memo = block(memo, item); });
        return memo;
    };

    /*
     * each: Calls block once for each element in self, passing that element
     *       as a parameter.
     */
    $.lib.each = $.each;

    /*
     * map: Calls block once for each element in self and return an array with
     *      the results
     */
    $.lib.map = $.map;

    /*
     * keys: Returns an array with the keys of the object
     */
    $.lib.keys = function (obj, own) {
        var keys = [],
            key;
        
        for (key in obj) {
            if (!own || obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    };

    /*
     * values: Returns an array with the values of the object
     */
    $.lib.values = function (obj, own) {
        var values = [],
            key;
        
        for (key in obj) {
            if (!own || obj.hasOwnProperty(key)) {
                values.push(obj[key]);
            }
        }
        return values;
    };

    /*
     * select: Returns an array with the elements that match the condition
     */
    $.lib.select = function (enumerable, condition) {
        var selected,
            i, len,
            key;
        
        if ($.lib.is_array(enumerable)) {
            selected = [];
            for (i = 0, len = enumerable.length; i < len; i += 1) {
                if (condition(i, enumerable[i])) {
                    selected.push(enumerable[i]);
                }
            }
        }
        else {
            selected = {};
            for (key in enumerable) {
                if (enumerable.hasOwnProperty(key) && condition(key, enumerable[key])) {
                    selected[key] = enumerable[key];
                }
            }
        }

        return selected;
    };

    /*
     * first: Returns the first enumerable element that matches the condition or null
     *        if none does
     */
    $.lib.first = function (enumerable, condition) {
        for (var key in enumerable) {
            if (enumerable.hasOwnProperty(key) && condition(key, enumerable[key])) {
                return enumerable[key];
            }
        }
        return null;
    };

    /*
     * all: Returns if all of the enumerable elements match the condition
     */
    $.lib.all = function (enumerable, condition) {
        for (var key in enumerable) {
            if (enumerable.hasOwnProperty(key) && !condition(key, enumerable[key])) {
                return false;
            }
        }
        return true;
    };


    /*
     * any: Returns if any of the enumerable elements matches the condition
     */
    $.lib.any = function (enumerable, condition) {
        return !!$.lib.first(enumerable, condition);
    };

})(jQuery);