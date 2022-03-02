# hello-web3
Smart Contract Testing

# run local network
```shell
npx hardhat run scripts/run.js --network localhost
```

# modify goerli network
vim hardhat.config.js
```
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};
```

# deploy contract to goerli network
```shell
npx hardhat run scripts/run.js --network goerli
```