var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults() {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    
    results[index] = data.toString();
    count++;

    if (count == 3) {
      printResults();
    }

  }))  
})
}

var times = 0;
for (var i = 2; i < process.argv.length; i++) {
  times++;
}

for (var i = 0; i < times; i++) {
  httpGet(i);
}