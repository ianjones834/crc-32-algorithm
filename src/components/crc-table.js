const calculator = require('./crc-calculator');

module.exports.crcTable = () => {
  const crcLookUpTable = [];

  for (let decimal = 0; decimal < 256; decimal++) {
    crcLookUpTable.push(calculator.crcCalculator(decimal));
  }

  return crcLookUpTable;
};
