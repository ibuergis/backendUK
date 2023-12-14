const fs = require('fs');

let result = fs.readFileSync('./babysteps.js');
console.log(result.toString());
