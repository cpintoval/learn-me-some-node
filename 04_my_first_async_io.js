var fs = require('fs');
    
var contents = fs.readFile(process.argv[2], function(err, data) {
  if (!err) {
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
  }
});