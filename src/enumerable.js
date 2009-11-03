/*
 * Enumerable functions
 */
$.extend({
    /*
     * inject: Combines the elements of enumerable by applying the block
     *         to an accumulator value (memo) and each element in turn.
     *         At each step, memo is set to the value returned by the block.
     *         The first form lets you supply an initial value for memo.
     *         The second form uses the first element of the collection
     *         as a the initial value (and skips that element while iterating).
     */
    inject: function (enumz, memo, block) {
        if (block === undefined) {
            block = memo;
            memo = 0;
        }
        $.each(enumz, function (i, item) { memo = block(memo, item); });
        return memo;
    },

    /*
     * findFirst: Returns the first enumerable element that matches the condition or null
     *            if none does
     */
    findFirst: function (enumz, condition) {
        var i, len = enumz.length;
        
        if (len === undefined) {
            for (var key in enumz) {
                if (enumz.hasOwnProperty(key) && condition.call(enumz[key], key, enumz[key])) {
                    return {key: key, value: enumz[key]};
                }
            }
        }
        else {
            for (i = 0; i < len; i += 1) {
                if (condition.call(enumz[i], i, enumz[i])) {
                    return enumz[i];
                }
            }
        }
        
        return null;
    },

    /*
     * findAll: Returns an array with the elements that match the condition
     */
    findAll: function (enumz, condition) {
        var selected,
        i, len,
        key;
    
        if ($.isArray(enumz)) {
            selected = [];
            for (i = 0, len = enumz.length; i < len; i += 1) {
                if (condition(i, enumz[i])) {
                    selected.push(enumz[i]);
                }
            }
        }
        else {
            selected = {};
            for (key in enumz) {
                if (enumz.hasOwnProperty(key) && condition(key, enumz[key])) {
                    selected[key] = enumz[key];
                }
            }
        }
    
        return selected;
    },

    /*
     * all: Returns if all of the enumerable elements match the condition
     */
    all: function (enumz, condition) {
        for (var key in enumz) {
            if (enumz.hasOwnProperty(key) && !condition(key, enumz[key])) {
                return false;
            }
        }
        return true;
    },
    
    
    /*
     * any: Returns if any of the enumerable elements matches the condition
     */
    any: function (enumz, condition) {
        return !!$.findFirst(enumz, condition);
    }
});
