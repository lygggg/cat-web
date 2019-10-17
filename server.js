var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream("./index.html").pipe(response);
});
server.listen(8080, function(){ 
    console.log('Server is running...');
});

