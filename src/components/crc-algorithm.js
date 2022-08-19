const table = require('./crc-table');
const { Bits } = require('../../lib/ibyte/src/bits');

const crcTable = table.crcTable();

module.exports.crcAlgorithm = (crcValue, buffer) => {
  newByte = new Bits(buffer[0], 32);

  let position = crcValue.xor(newByte.shiftLeft(24)).shiftRight(24).toDecimal();
  crcValue = (crcValue.shiftLeft(8)).xor(crcTable[position]);

  return crcValue;
};
