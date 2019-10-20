module.exports = function(namespace) {
  return console.log.bind(console, namespace)
}

/*
var log = console.log.bind(console);
var debug = console.debug.bind(console);
var warn = console.warm.bind(console);
var error = console.error.bind(console);
*/
