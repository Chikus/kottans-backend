const fs = require('fs')
module.exports = function read_dir(file_array,file_extention, print_data){
  fs.readdir(file_array, function read(err, data) {
    if (err) {
      return print_data(err);
    }
    const str = data.toString();
    var array1 = str.split(',');
    array1.forEach(function(element){
      if (element.includes('.'+file_extention)){
        print_data(null, element);
      }
    });
  });
}

/*
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*/
