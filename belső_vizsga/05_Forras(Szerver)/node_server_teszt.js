var fs = require('fs');

//Test 01
fs.readFile("server.js", function (err, data) {
    if (err) throw err;
    if (data.includes("const hostname = \"127.0.0.1\";")) {
        console.log("IP set - success")
    }
    else {
        console.log("IP set - fail");
    }
});

//Test 02
fs.readFile("server.js", function (err, data) {
    if (err) throw err;
    if (data.includes("const port = 3000;")) {
        console.log("PORT set - success")
    }
    else {
        console.log("PORT set - fail");
    }
});

//Test 03
fs.readFile("server.js", function (err, data) {
    if (err) throw err;
    if (data.includes("res.statusCode = 200;")) {
        console.log("StatusCode set - success")
    }
    else {
        console.log("StatusCode set - fail");
    }
});

//Test 04
fs.readFile("server.js", function (err, data) {
    if (err) throw err;
    if (data.includes("res.end(\"Vizsga szerver\");")) {
        console.log("Feedback string set - success")
    }
    else {
        console.log("Feedback string set - fail");
    }
});

//Test 05
fs.readFile("server.js", function (err, data) {
    if (err) throw err;
    if (data.includes("console.log(`A szerver fut a http://${hostname}:${port}/ címen`);") || data.includes("console.log(\"A szerver fut a http://127.0.0.1:3000/ címen\");")) {
        console.log("Console feedback set - success")
    }
    else {
        console.log("Console feedback set - fail");
    }
});