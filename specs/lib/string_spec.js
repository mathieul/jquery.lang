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
    describe('String functions', {
        "should escape a string so it can be used in a regexp without impact when calling escapeRegExp": function () {
            value_of($.escapeRegExp('.*+?^=!:${}()|[]/\\')).
                should_be('\\.\\*\\+\\?\\^\\=\\!\\:\\$\\{\\}\\(\\)\\|\\[\\]\\/\\\\');
        },

        "should encode HTML reserved entities when calling htmlEncode()": function () {
            value_of($.htmlEncode('<div>& "</div>')).
                should_be('&lt;div&gt;&amp; &quot;&lt;/div&gt;');
        },

        "should decode HTML reserved entities when calling htmlDecode()": function () {
            value_of($.htmlDecode('&quot;Enfoires!&quot; =&gt; ?&amp;!@% &lt;=')).
                should_be('"Enfoires!" => ?&!@% <=');
        }
        
    });
})();