const RenBridge = artifacts.require("RenBridge");

module.exports = function (deployer) {

    const gateway = "0x557e211EC5fc9a6737d2C6b7a1aDe3e0C11A8D5D"
  deployer.deploy(RenBridge, gateway);
};
