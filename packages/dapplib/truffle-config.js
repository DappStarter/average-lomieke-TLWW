require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note random unit harvest clip sun giggle'; 
let testAccounts = [
"0xcb001c82e0eb8ed0be09f0f29f9065d63668e9e3eed43ab76eb30e24a1d8a935",
"0x74bb91447f5cb572d583fdd1de9c323e46de4fc036c304e754b2e8d86f0b2961",
"0x168c8b558024949756e0338ad5ee523186d5512255bf9588daab09cf54709e99",
"0x41105ba3c15ba35a3f3c73b46b5859563f5499947f458f35f91c674ddcc7a034",
"0x7e132955e19b9d05645d46f8bc1f7d014a6f1170eecacd12760abf3b7b22a76b",
"0x1782388c49bb544a08d57211a337974638bd0a71dba8f8db7c03f21d2dd3966d",
"0x9aa9b2180fc1125d46b107435917ca9cadb3370ab3097841a9547532bfca4113",
"0x830d078bdfecec6b0f7620ffd0316d3eea36a51827e329be77e818cdca60d1cf",
"0xaee1bf5a2231908dcc472eda126438f0cc99052353c2b444c82f2d26e6ca553f",
"0x5d3be6b3b79c6154f59adb657458582f60b39a91cc4dc53e55b549cc6f475817"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

