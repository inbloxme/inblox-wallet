const { Wallet } = require('ethers');

async function createWallet() {
  const wallet = Wallet.createRandom();
  const { privateKey, address, mnemonic } = wallet;

  return {
    wallet, publicAddress: address, privateKey, mnemonic,
  };
}

async function importFromMnemonic(mnemonic) {
  const wallet = Wallet.fromMnemonic(mnemonic);
  const { privateKey, address } = wallet;

  return { wallet, publicAddress: address, privateKey };
}

module.exports = { createWallet, importFromMnemonic };
