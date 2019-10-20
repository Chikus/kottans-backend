const fs = require('fs')
fs.readdir(process.argv[2], function read(err, data) {
  if (err) {
    throw err;
  }
  const str = data.toString();
  var array1 = str.split(',');
  array1.forEach(function(element){
    if (element.includes('.'+process.argv[3])){
      console.log(element);
    }
  });
});
