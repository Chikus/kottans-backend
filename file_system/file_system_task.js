let fs = require('fs');

if (fs.existsSync('counter.txt')) {
  fs.open('counter.txt', 'r', (err, fd) => {
    fs.readFile(fd, (err,data) => {
      if(!isNaN(data.toString())) {
        fs.writeFile('counter.txt',parseInt(data.toString())+1,(err) => {
          if (err) throw err;
          return 0;
        });
      } else {
        return 1;
      }
    });
  });
} else {
  try {
    fs.writeFile('counter.txt',1, err => {
      if (err) throw err;
    });
  } finally {
    fs.chmod('counter.txt', 0o777,err => {
      if (err) throw err;
    });
    return 0;
  }
}
