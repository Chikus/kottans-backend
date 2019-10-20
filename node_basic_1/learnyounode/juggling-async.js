const http = require('http');
let url0 = process.argv[2];
let url1 = process.argv[3];
let url2 = process.argv[4];

for (let i = 0; i < 3; i++) {
  var url = eval("url"+i);
  http.get(url, function (response){
  //  response.setEncoding('utf8');
    var str = "";
    response.on('data',function (chunk) {
      str += chunk;
    });
    response.on('end', function (){
      console.log(str);
    });
  });
}


/*
'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
*/
