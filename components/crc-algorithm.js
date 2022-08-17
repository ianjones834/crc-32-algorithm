const table = require('./crc-table');
const { Bits } = require('../../ibyte/src/bits');

module.exports.crcAlgorithm = (dataBuf) => {
  const crcTable = table.crcTable();

  let crcValue = new Bits(0, 32);
  let newByte = new Bits(0, 32);

  for (const byte of dataBuf) {
    newByte = new Bits(byte, 32);

    let position = crcValue.xor(newByte.shiftLeft(24)).shiftRight(24).toDecimal();
    crcValue = (crcValue.shiftLeft(8)).xor(crcTable[position]);
  }

  return '0x' + crcValue.toHex();
};
