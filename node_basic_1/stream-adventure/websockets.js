var ws = require('/usr/local/lib/node_modules/stream-adventure/node_modules/websocket-stream');
var stream = ws('ws://localhost:8099');
stream.write('hello\n');
