/*
 * Array functions
 */
$.extend({
    /*
     * by:      Takes a member name string and an optional minor comparison
     *          function and returns a comparison function that can be used
     *          to sort an  array of objects that contain that member.
     *          The  minor comparison function is used to break ties when
     *          the o[name] and p[name] are equal.
     *          (Douglas Crockford - Javascript: The Good Parts)
     */
    by: function (name, minor) { 
        return function (o, p) { 
            var a, b; 
            if (o && p && typeof o === 'object' && typeof p === 'object') { 
                a = o[name]; 
                b = p[name]; 
                if (a === b) { 
                    return typeof minor === 'function' ? minor(o, p) : 0; 
                } 
                if (typeof a === typeof b) { 
                    return a < b ? -1 : 1; 
                } 
                return typeof a < typeof b ? -1 : 1; 
            }
            throw { name: 'Error', message: 'Expected an object when sorting by ' + name }; 
        };
    },

    /*
     * compact:     Returns a the array after removing the null and undefined
     *              values. The operation is destructive.
     */
    compact: function (array) {
        var i = 0,
            len = array.length;

        while (i < len) {
            if (array[i] === null || typeof array[i] === 'undefined') {
                array.splice(i, 1);
                len = array.length;
            }
            else {
                i += 1;
            }
        }

        return array;
    }
});

