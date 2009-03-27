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
    
};
