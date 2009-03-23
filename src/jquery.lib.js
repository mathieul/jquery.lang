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
        return val &&
            typeof val === 'object' &&
            typeof val.length === 'number' &&
            typeof val.splice === 'function' &&
            !(val.propertyIsEnumerable('length'));
    };
     
    /*
     * is_number: checks if the parameter is a number
     */
    $.lib.is_number = function (val) { return typeof val === 'number'; };

    /*
     * is_string: checks if the parameter is a string
     */
    $.lib.is_string = function (val) { return typeof val === 'string'; };
    
    /*
     * is_function: checks if the parameter is a function
     */
    $.lib.is_function = function (val) { return typeof val === 'function'; };

    /*
     * inject: Combines the elements of enum by applying the block
     *         to an accumulator value (memo) and each element in turn.
     *         At each step, memo is set to the value returned by the block.
     *         The first form lets you supply an initial value for memo.
     *         The second form uses the first element of the collection
     *         as a the initial value (and skips that element while iterating).
     */
    $.lib.inject = function (enum, arg2, arg3) {
        var block = $.lib.is_function(arg2) ? arg2 : arg3,
            memo = (block === arg2) ? 0 : arg2;

        $.each(enum, function (i, item) {
            memo = block(memo, item);
        })
        return memo;
    };

})(jQuery);