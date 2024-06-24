var fileOperatations = require('fs');

var http = require('http'); 

var hostName = "127.0.0.1";
var port = "3000";

var server = http.createServer((req,res)=>{
    fileOperatations.readFile('atnevezett.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});  
        res.write("atnevezett.txt tartalma: ");
        res.write(data);   
        res.end(); 
    });
});

server.listen(port,hostName,()=>{
    console.log(`A szerver fut, az alábbi hoston: http://${hostName}:${port}`);
});