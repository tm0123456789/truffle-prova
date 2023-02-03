const BasicMath = artifacts.require("./BasicMath");

module.exports = async function (_deployer) {
  console.log("Deploying BasicMath");
  await _deployer.deploy(BasicMath);
  console.log("HelloWorld deployed at:", BasicMath.address);
};
