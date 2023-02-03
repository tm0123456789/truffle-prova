const BasicMath = artifacts.require("BasicMath");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BasicMath", function (/* accounts */) {
  it("the sum should not overflow", async function () {
    try {
      contractInstance.add(2 ** 256 - 1, 100);
      assert.ok(false, "Threw an exception instead of overflowing");
    } catch (e) {
      assert.ok(true, "Caught the exception");
    }
  });
});
