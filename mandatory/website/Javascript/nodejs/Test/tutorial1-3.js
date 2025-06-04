
const http = require('http');
const fs = require("fs");
const moduleExample = require('./modules.js'); 

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
    unnamedVariable = Math.round(moduleExample.Time()) + Date(moduleExample.add(5,10));

    fs.appendFile("test.txt",unnamedVariable, (err) => {
        if (err) {
            console.error("Error appending to file:",err);
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('File appended successfully\n');

    })

}).listen(port,hostname, () => {
    console.log(`Server started at http://${hostname}:${port}/`);
});