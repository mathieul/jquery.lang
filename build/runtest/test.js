// Init
load("build/runtest/env.js");

window.location = "test/index.html";

window.onload = function(){
    // Load the test runner
    load(
        "lib/jquery.js",
        "src/jquery.lib.js",
        "build/runtest/testrunner.js"
    );
    
    // Load the tests
    load(
        "test/unit/lib.js"
    );
    
    // Display the results
    results();
};
