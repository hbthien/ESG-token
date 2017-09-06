module.exports = {
  networks: {
    development: {
       host: "localhost",
       port: 8545,
       network_id: "*", // Match any network id
       gas: 3000000
    },
    ropsten: {
      network_id: 3,
      host: "localhost",
      port: 8545,
      gas: 3000000
    }
  }
};