var http = require('http');
var uc = "Hello World!";
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(uc.toUpperCase());
    res.end();
}).listen(5501);