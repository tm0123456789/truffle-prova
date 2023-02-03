const HelloWorld = artifacts.require("./HelloWorld");

module.exports = async function (_deployer) {
  console.log("Deploying HelloWorld");
  await _deployer.deploy(HelloWorld);
  console.log("HelloWorld deployed at:", HelloWorld.address);
};
