const DataTypes = artifacts.require("./DataTypes");

module.exports = async function (_deployer) {
  console.log("Deploying DataTypes");
  await _deployer.deploy(DataTypes);
  console.log("HelloWorld deployed at:", DataTypes.address);
};
