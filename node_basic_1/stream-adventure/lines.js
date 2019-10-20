/*
process.stdin.on('data', function (chunk){
  var lines = chunk.toString().split('\n');
  lines.forEach(function(element, index){
    if (index % 2 === 0) {
      process.stdout.write(element.toLowerCase()+'\n');
    } else {
      process.stdout.write(element.toUpperCase()+'\n');
    }
  })
})
*/
var split = require('/usr/local/lib/node_modules/stream-adventure/node_modules/split');
var through = require('through2');

var count = 0;
process.stdin.pipe(split()).pipe(through(function (line, _, next) {
    if (count++ % 2) {
        this.push(line.toString().toUpperCase() + '\n');
    }
    else {
        this.push(line.toString().toLowerCase() + '\n');
    }
    next();
})).pipe(process.stdout);
