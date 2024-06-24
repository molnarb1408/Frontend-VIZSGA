var http = require('http'); //http modul használat

var hostName = "127.0.0.1";
var port = "3000";

var server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'}); //1X szerepelhet csak!!!
    res.write("Hello, world!"); // Tartalmat ír a html-re
    res.end(); //kötelező része, nélküle szintaktikai hiba - lezárja a respons-t
});

server.listen(port,hostName,()=>{
    console.log(`A szerver fut, az alábbi hoston: http://${hostName}:${port}`);
});