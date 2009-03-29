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
     * compact:     Returns the array after removing the null and undefined
     *              values. Note: this operation is destructive as the array
     *              is modified in place.
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
    },

    /*
     * flatten:     Returns a flat version of the array, meaning a one-dimensional
     *              version of the array.
     */
    flatten: function (array) {
        var i, len, res = [];
        
        for (i = 0, len = array.length; i < len; i += 1) {
            if ($.isArray(array[i])) {
                res = res.concat(arguments.callee(array[i]));
            }
            else {
                res[res.length] = array[i];
            }
        }
        
        return res;
    },

    /*
     * noDups:      Returns a new version of the array without the duplicates.
     */
    noDups: function (array) {
        return $.inject(array, [], function (mem, item) {
            if (mem.length === 0 || $.inArray(item, mem) === -1) {
                mem[mem.length] = item;
            }
            return mem;
        });
    }

});
