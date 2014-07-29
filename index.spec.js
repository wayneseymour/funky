require('./');

describe('Existy', function() {
  it("should respond with false when applied to null.", function(done) {
    expect(existy(null)).toEqual(false);
    done();
  });

  it("should respond with false when applied to undefined as a keyword.", function(done) {
    expect(existy(undefined)).toEqual(false);
    done();
  });

  it("should respond with true when applied to undefined as a string.", function(done) {
    expect(existy('undefined')).toEqual(true);
    done();
  });

  it("should respond with false when applied to an undefined object property", function(done) {
    expect(existy({}.notHere)).toEqual(false);
    done();
  });

  it("should respond with false when applied to the result of an IIFE", function(done) {
    expect(existy((function() {})())).toEqual(false);
    done();
  });

  it("should respond with true when applied to the number 0", function(done) {
    expect(existy(0)).toEqual(true);
    done();
  });

  it("should respond with true when applied the false keyword", function(done) {
    expect(existy(false)).toEqual(true);
    done();
  });

});

describe('Truthy', function(done) {
  it("should respond with true when applied to undefined as a reseved word.", function(done) {
    expect(truthy(undefined)).toEqual(false);
    done();
  });

});
