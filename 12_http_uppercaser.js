var http = require('http');
var map = require('through2-map');

var uc = map(function(chunk) {
  return chunk.toString().toUpperCase();
});

var server = http.createServer(function (request, response) {
  if (request.method == 'POST') {
    request.pipe(uc).pipe(response);
  }
});

server.listen(Number(process.argv[2]));