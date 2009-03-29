/*
 * String functions
 */
$.extend({
    /*
     * escapeRegExp:    Escapes any characters in the string that have special
     *                  meaning in a regular expression.
     *                  (Prototype library - http://www.prototypejs.org)
     */
    escapeRegExp: function (value) {
        return String(value).replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, '\\$1');
    },

    /*
     * htmlEncode:      Encode reserved characters to HTML entities.
     *                  (http://www.w3schools.com/tags/ref_entities.asp)
     *                  (Douglas Crockford - Javascript: The Good Parts)
     */
    htmlEncode: (function () {
        var chararcter = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;'
        };
        return function (value) {
            return value.replace(/[<>&"]/g, function (c) { return chararcter[c]; });
        };
    })(),

    /*
     * htmlDecode:      Decode reserved HTML entities to characters.
     *                  (http://www.w3schools.com/tags/ref_entities.asp)
     */
    htmlDecode: (function () {
        var entity = {
            '&lt;':     '<',
            '&gt;':     '>',
            '&amp;':    '&',
            '&quot;':   '"'
        };
        return function (value) {
            return value.replace(/(&lt;|&gt;|&amp;|&quot;)/g,
                function (c) { return entity[c]; });
        };
    })()
});
