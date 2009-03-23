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

    describe('Object and Prototypal Inheritance', {
        before_each: function () {},
        after_each: function () {},

        'should return an object when call to $.lib.create_object()': function () {
            value_of(typeof $.lib.create_object({})).should_be('object');
        },
        
        'should return an object with its prototype set to the parameter': function () {
            var func = function () { return 42; },
                obj = $.lib.create_object({str: "hey", num: 12, answer: func});
            value_of(obj.str).should_be("hey");
            value_of(obj.num).should_be(12);
            value_of(obj.answer()).should_be("42");
        }
    });
    
    describe('Type checking methods', {
        'should return true when calling is_number() with a number': function () {
            value_of($.lib.is_number(12)).should_be_true();
        },

        'should return false when calling is_number() with anything but a number': function () {
            value_of($.lib.is_number("nope")).should_be_false();
            value_of($.lib.is_number(function () {})).should_be_false();
            value_of($.lib.is_number({hello: 'bonjour'})).should_be_false();
            value_of($.lib.is_number([1, 2])).should_be_false();
        },

        'should return true when calling is_string() with a string': function () {
            value_of($.lib.is_string("hello")).should_be_true();
        },

        'should return false when calling is_string() with anything but a string': function () {
            value_of($.lib.is_string(42)).should_be_false();
            value_of($.lib.is_string(function () {})).should_be_false();
            value_of($.lib.is_string({hello: 'bonjour'})).should_be_false();
            value_of($.lib.is_string([1, 2])).should_be_false();
        }
    });
    
    describe('Enum methods', {
        "should inject the enumerable starting at 0 when called inject() without init": function () {
            value_of($.lib.inject([1, 2, 3, 4, 5], function (mem, item) {
                return mem + item;
            })).should_be(15);
        },

        "should inject the enumerable starting at init when called inject() with init": function () {
            value_of($.lib.inject([10, 20, 30], 100, function (mem, item) {
                return mem - item;
            })).should_be(40);
        }
    });

})();