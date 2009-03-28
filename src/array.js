/*
 * Enhanced Array Object
 */
var
array_instance_methods = {
    /*
     * map: Calls block once for each element in self and return an array with
     *      the results
     */
    map: function (block) {
        return $.map(this, block);
    }
};

$.lang.create_array = function (init) {
    if ($.lang.is_array(init)) {
        return $.lang.enumerable(init);
    }
    if (arguments.length > 1) {
        return $.lang.enumerable(arguments);
    }
    if ($.lang.is_undefined(init)) {
        return $.lang.enumerable([]);
    }
    if ($.lang.is_undefined(init.slice)) {
        return $.lang.enumerable(Array.slice.call(init));
    }
};
