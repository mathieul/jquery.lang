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
        }
    });
})();