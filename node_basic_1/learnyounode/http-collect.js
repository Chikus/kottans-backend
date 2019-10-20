const http = require('http')
let url = process.argv[2];

http.get(url, function (response){
//  response.setEncoding('utf8');
  var str = "";
  response.on('data',function (chunk) {
    str += chunk;
  });
  response.on('end', function (){
    console.log(str.length);
    console.log(str);
  });
});


/*

'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})

*/
