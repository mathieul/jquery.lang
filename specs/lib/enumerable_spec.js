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
    
    describe('Enumerable functions', {
        "should inject an enumerable starting at 0 when calling inject() without init": function () {
            value_of($.inject([1, 2, 3, 4, 5], function (mem, item) { return mem + item; })).
                should_be(15);
        },

        "should inject an enumerable starting at init when calling inject() with init": function () {
            value_of($.inject([10, 20, 30], 100, function (mem, item) { return mem - item; })).
                should_be(40);
        },

        "should return the first element that matches the condition when calling find()": function () {
            value_of($.find([22, 33, 44], function (i, item) { return item % 2 === 1; })).
                should_be(33);

            value_of($.find([2, 4, 6, 8], function (i, item) { return item % 2 === 1; })).
                should_be(null);
        },

        "should return all array elements that match the condition when calling findAll()": function () {
            value_of($.findAll([5, 0, 3, 4, 2, 1],
                function (i, item) { return item % 2 === 0; })).
            should_be([0, 4, 2]);
        },

        "should return all object elements that match the condition when calling findAll()": function () {
            value_of($.findAll({'in': 'yes', 'out': 'no', 'hey': 'yes'},
                function (key, value) { return value === 'yes'; })).
            should_be({'in': 'yes', 'hey': 'yes'});
        },

        "should return if all the elements match the condition when calling all()": function () {
            value_of($.all([2, 4, 6, 8],
                function (i, item) { return item % 2 === 0; })).
            should_be_true();

            value_of($.all([2, 4, 6, 8, 9],
                function (i, item) { return item % 2 === 0; })).
            should_be_false();
        },

        "should return if any element matches the condition when calling any()": function () {
            value_of($.any([2, 4, 6, 8],
                function (i, item) { return item % 2 === 0; })).
            should_be_true();

            value_of($.any([2, 4, 6, 8],
                function (i, item) { return item % 2 === 1; })).
            should_be_false();
        }
    });
})();
