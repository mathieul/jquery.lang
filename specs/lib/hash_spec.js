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
    describe('Hash functions', {
        "should return an array of the object's keys when calling keys()": function () {
            value_of($.keys({
                hello: "Bonjour",
                london: "Londres"})).
            should_be(["hello", "london"]);
        },

        "should return an array of the object's own keys when calling keys() with flag set": function () {
            var ancestor = {
                    hello: "Bonjour",
                    london: "Londres"
                },
                obj = $.create_object(ancestor);

            obj.one = "1"; obj.two = "2"; obj.three = "3";
            value_of($.keys(obj)).should_be(["one", "two", "three", "hello", "london"]);
            value_of($.keys(obj, true)).should_be(["one", "two", "three"]);
        },

        "should return an array of the object's values when calling values()": function () {
            value_of($.values({
                hello: "Bonjour",
                london: "Londres"})).
            should_be(["Bonjour", "Londres"]);
        },

        "should return an array of the object's own values when calling values() with flag set": function () {
            var ancestor = {
                    hello: "Bonjour",
                    london: "Londres"
                },
                obj = $.create_object(ancestor);

            obj.one = "1"; obj.two = "2"; obj.three = "3";
            value_of($.values(obj)).should_be(["1", "2", "3", "Bonjour", "Londres"]);
            value_of($.values(obj, true)).should_be(["1", "2", "3"]);
        }
    });
})();