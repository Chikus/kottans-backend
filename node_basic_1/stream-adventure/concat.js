var concat = require('/usr/local/lib/node_modules/stream-adventure/node_modules/concat-stream');
process.stdin.pipe(concat(function (src) {
    var s = src.toString().split('').reverse().join('');
    console.log(s);
}));
