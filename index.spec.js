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
});

describe('Truthy', function(done) {
  it("should respond with true when applied to undefined as a reseved word.", function(done) {
    expect(truthy(undefined)).toEqual(false);
    done();
  });

});
