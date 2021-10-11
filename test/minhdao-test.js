// Expose describe and it functions globally
buster.spec.expose();

describe("My thing", function () {
    it("has the foo and bar", function () {
        expect("foo").toEqual("bar");
    });

    it("states the obvious", function () {
        expect(true).toBe(true);;
    });
});