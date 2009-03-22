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

})(jQuery);