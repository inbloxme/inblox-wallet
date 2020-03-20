const { Wallet } = require('ethers');

class InbloxWallet {

    async createWallet() {
        const wallet = Wallet.createRandom();
        const privateKey = wallet.privateKey;
        const publicAddress = wallet.address;
        console.log(wallet)
        return { wallet, publicAddress, privateKey };
    }

    async importFromMnemonic(mnemonic) {
        const wallet = Wallet.fromMnemonic(mnemonic);
        const privateKey = wallet.privateKey;
        const publicAddress = wallet.address;
        return { wallet, publicAddress, privateKey };
    }

}
 module.exports = InbloxWallet;