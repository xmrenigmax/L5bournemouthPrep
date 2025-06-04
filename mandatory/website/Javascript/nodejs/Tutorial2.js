// Making our own modules for node.js

/**
 * exports = object that is used to export from a module
 * hello = function that prints a greeting message
 * add = function that adds two numbers
 */


// Step 1: Create a module (Tutorial2.js)
exports.hello = function() {
    console.log("Hello from my module!");
}

exports.add = function(a, b) {
    return a + b;
}

exports.Time = function() {
    return Date();
}


// Step 2: how to use the module
// pretend this is another file

const ModuleExample = require('./Tutorial2.js'); // import the module

ModuleExample.hello(); // call the hello function
const sum = ModuleExample.add(5, 10); // call the add function
console.log("Sum: " + sum); 
const currentTime = ModuleExample.Time(); // call the Time function
console.log("Current Time: " + currentTime); 



// Step 3: split query string
/**
 * url = module to parse URLs
 * querystring = module to parse query strings
 * urlString = string representation of a URL
 * parsedUrl = object representation of the URL
 * queryParams = object representation of the query parameters
 * 
 * why use this? = to extract query parameters from a URL
 * 
 */
const url = require('url');
const querystring = require('querystring');
const urlString = 'http://example.com/page?name=John&age=30';
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
console.log("Parsed URL: ", parsedUrl);
console.log("Query Parameters: ", queryParams);
// Output: { name: 'John', age: '30' }

