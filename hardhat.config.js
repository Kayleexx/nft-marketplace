/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: ['1bab485d8a765e6ecad8403f8362f0bbb0e3f3ad8ce69df4ce05d27ff6b27262'],
    },
  },
};
