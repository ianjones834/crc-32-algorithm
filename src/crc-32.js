const fs = require('fs');
const { Bits } = require('../lib/ibyte/src/bits');
const alg = require('./components/crc-algorithm');

module.exports.checksumFinder = async (filepath) => {
  let crc = new Bits (0, 32);
  const stream = fs.createReadStream(filepath, {highWaterMark: 1})

  for await (const buffer of stream) {
    crc = alg.crcAlgorithm(crc, buffer);
  }

   return '0x' + crc.toHex();
}