const fs = require('fs')

bhandle = fs.readFileSync(process.argv[2]);
const str = bhandle.toString();
console.log(str.split('\n').length-1);
