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
    describe('Object and Prototypal Inheritance functions', {
        before_each: function () {},
        after_each: function () {},

        'should return an object when calling create_object()': function () {
            value_of(typeof $.create_object({})).should_be('object');
        },
        
        'should return an object with its prototype set to the parameter': function () {
            var func = function () { return 42; },
                obj = $.create_object({str: "hey", num: 12, answer: func});
            value_of(obj.str).should_be("hey");
            value_of(obj.num).should_be(12);
            value_of(obj.answer()).should_be("42");
        }
    });
})();