
  var spawn = require('child_process').spawn;
  var duplexer = require('/usr/local/lib/node_modules/stream-adventure/node_modules/duplexer2');

  module.exports = function (cmd, args) {
      var ps = spawn(cmd, args);
      return duplexer(ps.stdin, ps.stdout);
  };
