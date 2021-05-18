const configServer = require("./configServer");

describe("test configServer", () => {
  it("should import with success file configServer", () => {
    expect(configServer).not.toBeUndefined();
  });
  it("should return setupStart function in configServer", () => {
    const setup = configServer();
    expect(setup).toMatchObject({
      start: expect.any(Function),
    });
  });
});
