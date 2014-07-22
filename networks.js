var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 0x00,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('5f5139c525a1731c9d2a9e59355109fa4fa47c7ee063b17d65c5bced26a1ae4d'),
    merkle_root: hex('5c8ac8f25d3325c785b75e6cc35258fe01cd7d42f29eb60b22f10490d21ebc16'),
    height: 0,
    nonce: 1080338,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1396919590,
    bits: 504365040,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 2332
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('4daea126edbcc5657db163e07e7ca44ffa095135599e2a9d1c73a125c539515f'),
    merkle_root: hex('5c8ac8f25d3325c785b75e6cc35258fe01cd7d42f29eb60b22f10490d21ebc16'),
    height: 0,
    nonce: 1080338,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1396919590,
    bits: 504365040,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 12332
};
