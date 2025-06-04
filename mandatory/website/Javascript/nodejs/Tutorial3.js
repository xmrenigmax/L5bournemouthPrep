// file modification for node.js



/**
 * * fs = file system module
 * * readFile = function to read a file
 * * err = error object if an error occurs
 * * data = data read from the file
 */
// Step 1:import the fs module
const fs = require('fs'); //fs is the file system module
const http = require('http'); // http module to create a server
const moduleExample = require('./Tutorial2.js'); // import my module

// setup server port and hostname
const hostname = "127.0.0.1";
const port = 8000;

// Step 2: create a server
    const server = http.createServer((req ,res) => { 

        // Step 3: read a file
        fs.readFile("test.html",'utf8', (err, data) => {
             if (err) {
                console.error("Error reading file:", err);
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World\n');
        });




        // Step 4: Create files 3 options (append, open, writeFile)
        // append creates if file doesnt exist
        fs.appendFile("appendFile.txt","HELLO\n World", (err) => {
            if (err) {
                console.error("Error appending to file:", err);
            } else {
                console.log("File appended successfully");
            }
        });
        // open creates empty file if not existm if exists and "w" it will open for writing, 
        // if "r" it will open for reading
        fs.open("openFile.txt", "w", (err, fd) => {
            if (err) {
                console.error("Error opening file:", err);
            } else {
                console.log("File opened successfully with file descriptor:", fd);
                fs.close(fd, (err) => {
                    if (err) {
                        console.error("Error closing file:", err);
                    }
                });
            }
        });
        // WriteFile replaces existing file if exists, if not will create file with conetent
        fs.writeFile("writeFile.txt", "Hello World", (err) => {
            if (err) {
                console.error("Error writing to file:", err);
            } else {
                console.log("File written successfully");
            }
        });
        



        // Step 5: Update Files
        // two options: appendFile and writeFile
        // append adds content to end of file
        // writeFile replaces existing content in file



        // Step 6: Delete files
        fs.unlink("test.html", (err) => {
            if (err) {
                console.error("Error deleting file:", err);
            } else {
                console.log("File deleted successfully");
            }
        });

        
        //Step 7: Rename files
        fs.rename("appendFile.txt", "appendFileRenamed.txt", (err) => {
            if (err) {
                console.error("Error renaming file:", err);
            } else {
                console.log("File renamed successfully");
            }
        }

        
        // Step 8: response body
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

