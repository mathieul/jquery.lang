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
    describe('$.lang.create_array', {
        "should return an empty array when called without parameter": function () {
            var obj = $.lang.create_array();
            value_of($.lang.is_array(obj)).should_be_true();
        },
        
        "should return a real array when called with an array-ish object": function () {
            var args = (function () { return arguments; })(12, 42, "blah");
            value_of($.lang.is_array(args)).should_be_false();
            args = $.lang.create_array(args);
            value_of($.lang.is_array(args)).should_be_true();
            value_of(args).should_be([12, 42, "blah"]);
        },
        
        "should return an array when called with an array": function () {
            var obj = $.lang.create_array(['abc', 'yay']);
            value_of($.lang.is_array(obj)).should_be_true();
        },
        
        "should return an array of the parameters when called with anything else": function () {
            value_of($.lang.is_array("test", 12, false)).should_be(["test", 12, false]);
        }
    });
})();