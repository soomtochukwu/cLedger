const { network } = require("hardhat"),
  { verify } = require("../utils/verify");

require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
  console.log("");
  const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY,
    { deployer } = await getNamedAccounts(),
    { deploy } = await deployments,
    { chainId } = network.config.chainId,
    Governator = await deploy("Governator", {
      from: deployer,
      args: [],
      log: true,
      waitConfirmations: network.config.blockConfirmations,
    });
  // verify Governator
  if (chainId !== 31337 && ETHERSCAN_KEY) {
    await verify(Governator.address, [], "contracts/Governator.sol:Governator");
    console.log(Governator.address);
  }
};

module.exports.tags = ["all", "nft"];
