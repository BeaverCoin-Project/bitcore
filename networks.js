var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fdc2b8dd'),
  addressVersion: 0x19,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('5f5139c525a1731c9d2a9e59355109fa4fa47c7ee063b17d65c5bced26a1ae4d'),
    merkle_root: hex('5C8AC8F25D3325C785B75E6CC35258FE01CD7D42F29EB60B22F10490D21EBC16'),
    height: 0,
    nonce: 1080338,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1396919590,
    bits: 504365040,
  },
  dnsSeeds: [
    'dnsseed.beavercoin.org'
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
    hash: hex('4DAEA126EDBCC5657DB163E07E7CA44FFA095135599E2A9D1C73A125C539515F'),
    merkle_root: hex('5C8AC8F25D3325C785B75E6CC35258FE01CD7D42F29EB60B22F10490D21EBC16'),
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
