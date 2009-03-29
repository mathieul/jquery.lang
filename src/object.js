/*
 * Object functions
 */
$.extend({
    /*
    * createObject: create an object using prototypal inheritance
    */
    createObject: function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    }
});
