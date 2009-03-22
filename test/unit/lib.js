module("lib");

test("Basic requirements", function() {
    expect(1);
    ok($.lib.create_object, "$.lib.create_object() exists");
});