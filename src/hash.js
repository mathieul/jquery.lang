/*
 * Hash functions
 */
$.extend({
    /*
     * keys: Returns an array with the keys of the object
     */
    keys: function (obj, own) {
        var keys = [],
        key;
    
        for (key in obj) {
            if (!own || obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    },
    
    /*
     * values: Returns an array with the values of the object
     */
    values: function (obj, own) {
        var values = [],
        key;
    
        for (key in obj) {
            if (!own || obj.hasOwnProperty(key)) {
                values.push(obj[key]);
            }
        }
        return values;
    }
});
