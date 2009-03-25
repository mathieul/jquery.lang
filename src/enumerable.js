/*
* inject: Combines the elements of enumerable by applying the block
*         to an accumulator value (memo) and each element in turn.
*         At each step, memo is set to the value returned by the block.
*         The first form lets you supply an initial value for memo.
*         The second form uses the first element of the collection
*         as a the initial value (and skips that element while iterating).
*/
$.lang.inject = function (enumerable, memo, block) {
    if (typeof block === 'undefined') {
        block = memo;
        memo = 0;
    }
    $.each(enumerable, function (i, item) { memo = block(memo, item); });
    return memo;
};

/*
* each: Calls block once for each element in self, passing that element
*       as a parameter.
*/
$.lang.each = $.each;

/*
* map: Calls block once for each element in self and return an array with
*      the results
*/
$.lang.map = $.map;

/*
* keys: Returns an array with the keys of the object
*/
$.lang.keys = function (obj, own) {
    var keys = [],
    key;

    for (key in obj) {
        if (!own || obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
};

/*
* values: Returns an array with the values of the object
*/
$.lang.values = function (obj, own) {
    var values = [],
    key;

    for (key in obj) {
        if (!own || obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
};

/*
* select: Returns an array with the elements that match the condition
*/
$.lang.select = function (enumerable, condition) {
    var selected,
    i, len,
    key;

    if ($.lang.is_array(enumerable)) {
        selected = [];
        for (i = 0, len = enumerable.length; i < len; i += 1) {
            if (condition(i, enumerable[i])) {
                selected.push(enumerable[i]);
            }
        }
    }
    else {
        selected = {};
        for (key in enumerable) {
            if (enumerable.hasOwnProperty(key) && condition(key, enumerable[key])) {
                selected[key] = enumerable[key];
            }
        }
    }

    return selected;
};

/*
* first: Returns the first enumerable element that matches the condition or null
*        if none does
*/
$.lang.first = function (enumerable, condition) {
    for (var key in enumerable) {
        if (enumerable.hasOwnProperty(key) && condition(key, enumerable[key])) {
            return enumerable[key];
        }
    }
    return null;
};

/*
* all: Returns if all of the enumerable elements match the condition
*/
$.lang.all = function (enumerable, condition) {
    for (var key in enumerable) {
        if (enumerable.hasOwnProperty(key) && !condition(key, enumerable[key])) {
            return false;
        }
    }
    return true;
};


/*
* any: Returns if any of the enumerable elements matches the condition
*/
$.lang.any = function (enumerable, condition) {
    return !!$.lang.first(enumerable, condition);
};
