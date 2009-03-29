/*
 * Array functions
 */
$.extend({
    /*
     * compact: ...
     */
    compact: function (array) {
        return array;
    }
});


        // /*
        //  * keys: Returns an array with the keys of the object
        //  */
        // keys: function (obj, own) {
        //     var keys = [],
        //     key;
        // 
        //     for (key in obj) {
        //         if (!own || obj.hasOwnProperty(key)) {
        //             keys.push(key);
        //         }
        //     }
        //     return keys;
        // },
        // 
        // /*
        //  * values: Returns an array with the values of the object
        //  */
        // values: function (obj, own) {
        //     var values = [],
        //     key;
        // 
        //     for (key in obj) {
        //         if (!own || obj.hasOwnProperty(key)) {
        //             values.push(obj[key]);
        //         }
        //     }
        //     return values;
        // },
        // 
        // /*
        //  * select: Returns an array with the elements that match the condition
        //  */
        // select: function (enumerable, condition) {
        //     var selected,
        //     i, len,
        //     key;
        // 
        //     if ($.lang.is_array(enumerable)) {
        //         selected = [];
        //         for (i = 0, len = enumerable.length; i < len; i += 1) {
        //             if (condition(i, enumerable[i])) {
        //                 selected.push(enumerable[i]);
        //             }
        //         }
        //     }
        //     else {
        //         selected = {};
        //         for (key in enumerable) {
        //             if (enumerable.hasOwnProperty(key) && condition(key, enumerable[key])) {
        //                 selected[key] = enumerable[key];
        //             }
        //         }
        //     }
        // 
        //     return selected;
        // },
        // 
        // /*
        //  * first: Returns the first enumerable element that matches the condition or null
        //  *        if none does
        //  */
        // first: function (enumerable, condition) {
        //     for (var key in enumerable) {
        //         if (enumerable.hasOwnProperty(key) && condition(key, enumerable[key])) {
        //             return enumerable[key];
        //         }
        //     }
        //     return null;
        // },
        // 
        // /*
        //  * all: Returns if all of the enumerable elements match the condition
        //  */
        // all: function (enumerable, condition) {
        //     for (var key in enumerable) {
        //         if (enumerable.hasOwnProperty(key) && !condition(key, enumerable[key])) {
        //             return false;
        //         }
        //     }
        //     return true;
        // },
        // 
        // 
        // /*
        //  * any: Returns if any of the enumerable elements matches the condition
        //  */
        // any: function (enumerable, condition) {
        //     return !!$.lang.first(enumerable, condition);
        // }
    };
    
    // return function (that) {
    //     for (var func in methods) {
    //         if (methods.hasOwnProperty(func)) {
    //             that[func] = that[func] || methods[func];
    //         }
    //     }
    // 
    //     return that;
    // };
//})();