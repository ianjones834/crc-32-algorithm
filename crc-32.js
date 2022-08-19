const fs = require('fs');
const alg = require('./components/crc-algorithm');

module.exports.checksumFinder = (string) => {
  fs.readFile(string, (err, data) => {
    if (err) throw err;
    console.log(alg.crcAlgorithm(data));
  })

};

this.checksumFinder('./test.txt');