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
        'should return true when calling is_array() with an array': function () {
            value_of($.lib.is_array([])).should_be_true();
            value_of($.lib.is_array([1, "two"])).should_be_true();
        },

        'should return false when calling is_array() if not an array': function () {
            value_of($.lib.is_array("nope")).should_be_false();
            value_of($.lib.is_array(arguments)).should_be_false();
            value_of($.lib.is_array({0: 'zero', 1: 'one', length: 2})).should_be_false();
        },

        'should return true when calling is_number() with a number': function () {
            value_of($.lib.is_number(12)).should_be_true();
        },

        'should return false when calling is_number() if not a number': function () {
            value_of($.lib.is_number("12")).should_be_false();
            value_of($.lib.is_number(NaN)).should_be_false();
        },

        'should return true when calling is_string() with a string': function () {
            value_of($.lib.is_string("hello")).should_be_true();
        },

        'should return false when calling is_string() if not a string': function () {
            value_of($.lib.is_string(42)).should_be_false();
        },

        'should return true when calling is_function() with a function': function () {
            value_of($.lib.is_function(Array.slice)).should_be_true();
            value_of($.lib.is_function(function () {})).should_be_true();
        },

        'should return false when calling is_function() if not a function': function () {
            value_of($.lib.is_function({})).should_be_false();
        },

        'should return true when calling is_boolean() with a boolean': function () {
            value_of($.lib.is_boolean(true)).should_be_true();
            value_of($.lib.is_boolean(false)).should_be_true();
        },

        'should return false when calling is_boolean() if not a boolean': function () {
            var not_defined;
            value_of($.lib.is_boolean(not_defined)).should_be_false();
            value_of($.lib.is_boolean(null)).should_be_false();
            value_of($.lib.is_boolean(0)).should_be_false();
            value_of($.lib.is_boolean('')).should_be_false();
        },

        'should return true when calling is_date() with a date': function () {
            value_of($.lib.is_date(new Date())).should_be_true();
        },

        'should return false when calling is_date() if not a date': function () {
            value_of($.lib.is_date({toUTCString: 'test'})).should_be_false();
        },
        
        'should return true when calling is_object() with an object': function () {
            value_of($.lib.is_object({})).should_be_true();
            value_of($.lib.is_object(function () {})).should_be_true();
        },

        'should return false when calling is_object() if not an object': function () {
            value_of($.lib.is_object(12)).should_be_false();
            value_of($.lib.is_object("blah")).should_be_false();
        },
        
        'should return true when calling is_regexp() with a regexp': function () {
            value_of($.lib.is_regexp(new RegExp('^$'))).should_be_true();
            value_of($.lib.is_regexp(/^$/)).should_be_true();
        },

        'should return false when calling is_regexp() if not a regexp': function () {
            value_of($.lib.is_regexp("^$")).should_be_false();
        },

        'should return true when calling is_undefined() with a regexp': function () {
            var not_defined;
            value_of($.lib.is_undefined()).should_be_true();
            value_of($.lib.is_undefined(not_defined)).should_be_true();
            value_of($.lib.is_undefined(undefined)).should_be_true();
        },

        'should return false when calling is_undefined() if not a regexp': function () {
            value_of($.lib.is_undefined(false)).should_be_false();
        }
    });
    
    describe('Enumerable methods', {
        "should have $.lib.each() as an alias for $.each()": function () {
            value_of($.lib.each).should_be($.each);
        },

        "should have $.lib.map() as an alias for $.map()": function () {
            value_of($.lib.map).should_be($.map);
        },

        "should have $.lib.grep() as an alias for $.grep()": function () {
            value_of($.lib.grep).should_be($.grep);
        },

        "should inject an enumerable starting at 0 when calling inject() without init": function () {
            value_of($.lib.inject([1, 2, 3, 4, 5], function (mem, item) {
                return mem + item;
            })).should_be(15);
        },

        "should inject an enumerable starting at init when calling inject() with init": function () {
            value_of($.lib.inject([10, 20, 30], 100, function (mem, item) {
                return mem - item;
            })).should_be(40);
        },
        
        "should return all elements that match the condition when calling all()": function () {
            value_of($.lib.all([5, 4, 3, 2, 1, 0],
                               function (i, item) { return item % 2 === 0; })).
            should_be([4, 2, 0]);
        },
        
        "should return the first element that matches the condition when calling first()": function () {
            value_of($.lib.first([22, 33, 44],
                               function (i, item) { return item % 2 === 1; })).
            should_be(33);

            value_of($.lib.first([2, 4, 6, 8],
                               function (i, item) { return item % 2 === 1; })).
            should_be(null);
        },

        "should return if any element matches the condition when calling any()": function () {
            value_of($.lib.any([2, 4, 6, 8],
                               function (i, item) { return item % 2 === 0; })).
            should_be(true);

            value_of($.lib.any([2, 4, 6, 8],
                               function (i, item) { return item % 2 === 1; })).
            should_be(false);
        },

        // TODO: select, group_by, min, max, sort, compact
        "should ": function () {
            value_of(true).should_be(true);
        }
    });

    describe('Hash methods', {
        "should return an array of the object's keys when calling keys()": function () {
            value_of($.lib.keys({
                hello: "Bonjour",
                london: "Londres"})).
            should_be(["hello", "london"]);
        },

        "should return an array of the object's own keys when calling keys() with flag set": function () {
            var ancestor = {
                    hello: "Bonjour",
                    london: "Londres"
                },
                obj = $.lib.create_object(ancestor);

            obj.one = "1"; obj.two = "2"; obj.three = "3";
            value_of($.lib.keys(obj)).should_be(["one", "two", "three", "hello", "london"]);
            value_of($.lib.keys(obj, true)).should_be(["one", "two", "three"]);
        },

        "should return an array of the object's values when calling values()": function () {
            value_of($.lib.values({
                hello: "Bonjour",
                london: "Londres"})).
            should_be(["Bonjour", "Londres"]);
        },

        "should return an array of the object's own values when calling values() with flag set": function () {
            var ancestor = {
                    hello: "Bonjour",
                    london: "Londres"
                },
                obj = $.lib.create_object(ancestor);

            obj.one = "1"; obj.two = "2"; obj.three = "3";
            value_of($.lib.values(obj)).should_be(["1", "2", "3", "Bonjour", "Londres"]);
            value_of($.lib.values(obj, true)).should_be(["1", "2", "3"]);
        }
    });
})();