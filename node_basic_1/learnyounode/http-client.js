const http = require('http')
let url = process.argv[2];

http.get(url, function (response){
  response.setEncoding('utf8');
  response.on('data',function (data) {
    data = data.toString();
    console.log(data.length)
    console.log(data);
  });
});



/*
'use strict'
const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
*/
