/*
 * Enumerable MixIn
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
    }
});
