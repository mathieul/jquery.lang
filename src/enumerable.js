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
    inject: function (enumerable, memo, block) {
        if (typeof block === 'undefined') {
            block = memo;
            memo = 0;
        }
        $.each(enumerable, function (i, item) { memo = block(memo, item); });
        return memo;
    },

    /*
     * find: Returns the first enumerable element that matches the condition or null
     *        if none does
     */
    find: function (enumerable, condition) {
        for (var key in enumerable) {
            if (enumerable.hasOwnProperty(key) && condition(key, enumerable[key])) {
                return enumerable[key];
            }
        }
        return null;
    },

    /*
     * findAll: Returns an array with the elements that match the condition
     */
    findAll: function (enumerable, condition) {
        var selected,
        i, len,
        key;
    
        if ($.isArray(enumerable)) {
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
    },

    /*
     * all: Returns if all of the enumerable elements match the condition
     */
    all: function (enumerable, condition) {
        for (var key in enumerable) {
            if (enumerable.hasOwnProperty(key) && !condition(key, enumerable[key])) {
                return false;
            }
        }
        return true;
    },
    
    
    /*
     * any: Returns if any of the enumerable elements matches the condition
     */
    any: function (enumerable, condition) {
        return !!$.find(enumerable, condition);
    }
});
