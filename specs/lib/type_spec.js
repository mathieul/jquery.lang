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

    describe('Type checking functions', {
        'should return true when calling is_array() with an array': function () {
            value_of($.is_array([])).should_be_true();
            value_of($.is_array([1, "two"])).should_be_true();
        },

        'should return false when calling is_array() if not an array': function () {
            value_of($.is_array("nope")).should_be_false();
            value_of($.is_array(arguments)).should_be_false();
            value_of($.is_array({0: 'zero', 1: 'one', length: 2})).should_be_false();
        },

        'should return true when calling is_number() with a number': function () {
            value_of($.is_number(12)).should_be_true();
        },

        'should return false when calling is_number() if not a number': function () {
            value_of($.is_number("12")).should_be_false();
            value_of($.is_number(NaN)).should_be_false();
        },

        'should return true when calling is_string() with a string': function () {
            value_of($.is_string("hello")).should_be_true();
        },

        'should return false when calling is_string() if not a string': function () {
            value_of($.is_string(42)).should_be_false();
        },

        'should return true when calling is_function() with a function': function () {
            value_of($.is_function(Array.slice)).should_be_true();
            value_of($.is_function(function () {})).should_be_true();
        },

        'should return false when calling is_function() if not a function': function () {
            value_of($.is_function({})).should_be_false();
        },

        'should return true when calling is_boolean() with a boolean': function () {
            value_of($.is_boolean(true)).should_be_true();
            value_of($.is_boolean(false)).should_be_true();
        },

        'should return false when calling is_boolean() if not a boolean': function () {
            var not_defined;
            value_of($.is_boolean(not_defined)).should_be_false();
            value_of($.is_boolean(null)).should_be_false();
            value_of($.is_boolean(0)).should_be_false();
            value_of($.is_boolean('')).should_be_false();
        },

        'should return true when calling is_date() with a date': function () {
            value_of($.is_date(new Date())).should_be_true();
        },

        'should return false when calling is_date() if not a date': function () {
            value_of($.is_date({toUTCString: 'test'})).should_be_false();
        },
        
        'should return true when calling is_object() with an object': function () {
            value_of($.is_object({})).should_be_true();
            value_of($.is_object(function () {})).should_be_true();
        },

        'should return false when calling is_object() if not an object': function () {
            value_of($.is_object(12)).should_be_false();
            value_of($.is_object("blah")).should_be_false();
        },
        
        'should return true when calling is_regexp() with a regexp': function () {
            value_of($.is_regexp(new RegExp('^$'))).should_be_true();
            value_of($.is_regexp(/^$/)).should_be_true();
        },

        'should return false when calling is_regexp() if not a regexp': function () {
            value_of($.is_regexp("^$")).should_be_false();
        },

        'should return true when calling is_undefined() with a regexp': function () {
            var not_defined;
            value_of($.is_undefined()).should_be_true();
            value_of($.is_undefined(not_defined)).should_be_true();
            value_of($.is_undefined(undefined)).should_be_true();
        },

        'should return false when calling is_undefined() if not a regexp': function () {
            value_of($.is_undefined(false)).should_be_false();
        }
    });
})();