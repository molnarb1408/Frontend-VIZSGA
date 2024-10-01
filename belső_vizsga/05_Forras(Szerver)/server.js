const http = require('http');

const hostname = "127.0.0.1";
const port = 3000; 

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end("Vizsga szerver");
});

server.listen(port, hostname, () => {
    console.log(`A szerver fut a http://${hostname}:${port}/ címen`);
});