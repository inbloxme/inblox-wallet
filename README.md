# Generate Wallet

Download this library using,

```npm install @inbloxme/inblox-wallet```

Import this library into your project using,

```const InbloxWallet = require('@inbloxme/inblox-wallet')```

Initialise the constructor

```const wallet = new InbloxWallet()```

Generate your wallet using,

```const newWallet = wallet.createWallet()```

If you already have a mnemonic and wants to import the wallet using mnemonic, then use,

```
const mnemonic = 'your, twelve, word, seed, phrase, to, import, your, Ethereum, wallet, credentials, from';
const newWallet = wallet.importFromMnemonic(mnemonic)
```
