const FarmRegistry = artifacts.require("FarmRegistry");

module.exports = function (deployer, network) {
  if (network === "celo") {
    deployer.deploy(FarmRegistry);
  }
};
