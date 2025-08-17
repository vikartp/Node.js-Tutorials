const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Read the HTML file and send it as the response
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.end('<h1>Error loading index.html</h1>');
        } else {
            res.end(data);
        }
    });

    // Use pipe to stream the HTML file
    // fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});