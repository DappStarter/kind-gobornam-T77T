require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food ivory raise saddle evidence gesture hat army genius'; 
let testAccounts = [
"0xfea5710019abca1d377ae352b10c9c6cf29be188f96939a465662ed55c61eca6",
"0x8a1255989f364564a40e4cf67378c45f9d4b6fd1c4f3ebe182f2d78227860d73",
"0x6766c80b0f5da00a5cbba395bbb77b5ffbaed35382cec3bb892c474eccea0857",
"0xf684d66b6d20794f90c3f33942203e97981444932037dd64ee2f0be6e92f3a33",
"0x0e698570175244dac0305a8ebbbe2d2c06cc3e3d2cffc35e8d633a13a159fc4a",
"0x389729f1df18e9d1c214e7a37d787e53984f8dd04c3626765043846038e9da45",
"0x7780dec1d0b1e71f7307c68cf23206e61dcfc1774830356fda1b377ccfa42c03",
"0x86d0278301e087c4b42981ace3e1dfd4c720e000e7036ef43343aabcdc47ba07",
"0xb5728ed40ab1d744aad5c0a5c8cf0b2810f09a3a15b186eb8eef183c2a14f3d9",
"0x5552198ed1db739a472d9214ef8d4cec51a0e43cd26f30ea83aa992397e5da7b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

