# Inblox Wallet Generation Package

This package is used to generate a new Ethereum wallet or import a wallet using a nmemonic phrase.

> **Disclaimer - This is WIP, and release in alpha.**

## Installation and Usage

> Installation

Install the package by running the command,

```npm install @inbloxme/inblox-wallet```

Import the package into your project using,

```const inbloxWallet = require('@inbloxme/inblox-wallet');```

> Generate a new Ethereum wallet using

```const inbloxWallet = wallet.createWallet();```

#### Output

```publicAddress``` - Public address of that wallet.
```privateKey``` - Private key of that public address.
```mnemonic``` - 12 word mnemonic or seed phrase.
```wallet``` - An object with other wallet related information.

> Import an existing Ethereum wallet by passing in the mnemonic using, 

```const inbloxWallet = wallet.importFromMnemonic(menmonic);```

#### Output

```publicAddress``` - Public address of that wallet.
```privateKey``` - Private key of that public address.
```wallet``` - An object with other wallet related information.

## WIP

Want to contribute, we would :heart: that!

We are a Global :earth_asia::earth_africa::earth_americas: team! :muscle:

Write to dev@inblox.me, or follow us on twitter, [https://twitter.com/inblox_me](https://twitter.com/inblox_me)