
  var duplexer = require('/usr/local/lib/node_modules/stream-adventure/node_modules/duplexer2');
  var through = require('through2').obj;

  module.exports = function (counter) {
      var counts = {};
      var input = through(write, end);
      return duplexer({objectMode: true}, input, counter);

      function write (row, _, next) {
          counts[row.country] = (counts[row.country] || 0) + 1;
          next();
      }
      function end (done) {
          counter.setCounts(counts);
          done();
      }
  };
