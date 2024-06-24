var http = require('http');

var firstModules = require('./02_first_module.js');

var hostName = "127.0.0.1";
var port = "3000";

var server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write("Aktuális idő: "+firstModules.getActualDate()); 
    res.write("\n");
    res.write("Üzenet: "+firstModules.getNodeJSText()); 
    res.end(); 
});

server.listen(port,hostName,()=>{
    console.log(`A szerver fut, az alábbi hoston: http://${hostName}:${port}`);
});