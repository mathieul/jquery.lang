/*
 * Object functions
 */
$.extend({
    /*
    * create_object: create an object using prototypal inheritance
    */
    create_object: function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    }
});
