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
        'should return true when calling isNumber() with a number': function () {
            value_of($.isNumber(12)).should_be_true();
        },

        'should return false when calling isNumber() if not a number': function () {
            value_of($.isNumber("12")).should_be_false();
            value_of($.isNumber(NaN)).should_be_false();
        },

        'should return true when calling isString() with a string': function () {
            value_of($.isString("hello")).should_be_true();
        },

        'should return false when calling isString() if not a string': function () {
            value_of($.isString(42)).should_be_false();
        },

        'should return true when calling isBoolean() with a boolean': function () {
            value_of($.isBoolean(true)).should_be_true();
            value_of($.isBoolean(false)).should_be_true();
        },

        'should return false when calling isBoolean() if not a boolean': function () {
            var not_defined;
            value_of($.isBoolean(not_defined)).should_be_false();
            value_of($.isBoolean(null)).should_be_false();
            value_of($.isBoolean(0)).should_be_false();
            value_of($.isBoolean('')).should_be_false();
        },

        'should return true when calling isDate() with a date': function () {
            value_of($.isDate(new Date())).should_be_true();
        },

        'should return false when calling isDate() if not a date': function () {
            value_of($.isDate({toUTCString: 'test'})).should_be_false();
        },
        
        'should return true when calling isObject() with an object': function () {
            value_of($.isObject({})).should_be_true();
            value_of($.isObject(function () {})).should_be_true();
        },

        'should return false when calling isObject() if not an object': function () {
            value_of($.isObject(12)).should_be_false();
            value_of($.isObject("blah")).should_be_false();
        },
        
        'should return true when calling isRegExp() with a regexp': function () {
            value_of($.isRegExp(new RegExp('^$'))).should_be_true();
            value_of($.isRegExp(/^$/)).should_be_true();
        },

        'should return false when calling isRegExp() if not a regexp': function () {
            value_of($.isRegExp("^$")).should_be_false();
        },

        'should return true when calling isUndefined() with a regexp': function () {
            var not_defined;
            value_of($.isUndefined()).should_be_true();
            value_of($.isUndefined(not_defined)).should_be_true();
            value_of($.isUndefined(undefined)).should_be_true();
        },

        'should return false when calling isUndefined() if not a regexp': function () {
            value_of($.isUndefined(false)).should_be_false();
        }
    });
})();