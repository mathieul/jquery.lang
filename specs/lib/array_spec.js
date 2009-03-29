/*
 * JSSpec expectations:
 *  - should_be
 *  - should_not_be
 *  - should_be_empty
 *  - should_be_true
 *  - should_be_false
 *  - should_have(x, "items")                   // string/array
 *  - should_have_exactly(x, "items")           // string/array
 *  - should_have_at_least(x, "items")          // string/array
 *  - should_have_at_most(x, "items")           // string/array
 *  - should_include(item)                      // array/hash
 *  - should_not_include(item)                  // array/hash
 *  - should_match(regexp)                      // string
 *  - should_not_match(regexp)                  // string
 *  - should_be_null(var)
 *  - should_not_be_null(var)
 *  - should_be_undefined(var)
 *  - should_not_be_undefined(var)
 *  - 
 */
(function () {
    var zhanna = {name: 'Zhanna', age: 27},
        ira = {name: 'Irina', age: 27},
        brioche = {name: 'Brioche', age: 1},
        mathieu = {name: 'Mathieu', age: 38};

    describe('Array functions', {
        "should return a sort callback to order by object property when calling by()": function () {
            var func = $.by('age');
            value_of(func(zhanna, mathieu)).should_be(-1);
            value_of(func(zhanna, ira)).should_be(0);
            value_of(func(zhanna, brioche)).should_be(1);
        },

        "should return a sort callback that accepts a minor sort callback when calling by()": function () {
            var func = $.by('age', function (a, b) { return [a.name, b.name]; });
            value_of(func(zhanna, ira)).should_be(['Zhanna', 'Irina']);
        },
        
        "should return an array without null and undefined values when calling compact()": function () {
            var orig = [1, 'blah', null, [], undefined, 2, null, 2],
                result = $.compact(orig);
            value_of(result).should_be([1, 'blah', [], 2, 2]);
            value_of(orig).should_be([1, 'blah', [], 2, 2]);
        },
        
        "should flatten the array when calling flatten()": function () {
            var complex = ['mat', ['zhanna', 'boubie'], ['coukie', ['lajoo', 'zlaj'], [['princess']]]];
            value_of($.flatten(complex)).
                should_be(['mat', 'zhanna', 'boubie', 'coukie', 'lajoo', 'zlaj', 'princess']);
        },
        
        "should return a new array without the duplicates when calling noDups()": function () {
            value_of($.noDups(['one', 2, true, false, 'two', true, 'one', 2, true, 4])).
                should_be(['one', 2, true, false, 'two', 4]);
        }
    });
})();