(function ($) {
    /*
     * Zlaj plugin: standard library
     */
     $.zl = $.zl || {};
     
     /*
      * zl.create_object: create an object using prototypal inheritance
      */
     $.zl.create_object = function (o) {
         var F = function () {};
         F.prototype = o;
         return new F();
     };
})(jQuery);