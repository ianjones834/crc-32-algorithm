const { Bits } = require('../../lib/ibyte/src/bits');

const generator = new Bits(parseInt('00000100110000010001110110110111', 2), 32);

module.exports.crcCalculator = (decimal) => {
  let byte = new Bits (decimal, 32)

  byte = byte.shiftLeft(24);

  for (let count = 0; count < 8; count++) {
    if (byte.toString()[0] === '0') {
      byte = byte.shiftLeft(1);
    }
    else {
      byte = byte.shiftLeft(1);
      byte = byte.xor(generator);
    }
  }

  const crcTableElement = byte;

  return crcTableElement;
};
