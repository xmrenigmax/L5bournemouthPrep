// This is a simple Node.js tutorial 


/**
 * Code Explanation:
 * const = constant variable that cannot be changed
 * req (request) = request object that contains information about requests about server
 * res (response) = response object that contains information about responses to the server
 * 
 * require() = function to import modules in Node.js
 * 
 * console.log() = print statement to console (terminal)
 * .listen() = method to start a server 
 *  port, hostname = where server listens and runs
 * 
 * content-type = content is plain text being sent to client
 */

 
// Step 1: import http module
const http = require('http');  

// Step 2: Setup server port and hostname
const hostname = "127.0.0.1"; // localhost
const port = 8000;

// Step 3: Create a Http server
const server = http.createServer((req ,res) => { 

    // Step 4: response header with http status and content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Step 5: response body
    res.end('Hello World\n');

});

// Step 6: Server listens on port and hostname
server.listen(port, hostname, () => {

    //Step 7: print message to indicate server is starting
    console.log(`Server running at http://${hostname}:${port}/`);  //$() = used to insert variables
});






// utilising Express.js for an advanced server
/**
 * express = web framework for Node.js
 * app = instance of express application
 * 
 * .get() = gets request
 * send() = sends response
 */

// Step 1: import express module
const express = require('express');

// Step 2: create an instance of express application
const app = express();
const expressPort = 3000; //(expressport is variable name for port)

// Step 3: create a route for the URL root
app.get('/', (req, res) => { // '/' = url root
    res.send('Hello World from Express!');
});

// Step 4: start the server
app.listen(expressPort, () => {
    console.log(`Express server running at http://localhost:${expressPort}/`);
});


