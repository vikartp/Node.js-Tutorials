/**
 * This example demonstrates how to create an HTTP server 
 * that responds with a dynamic HTML page.
 */

const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const name = 'Vikash Kumar'; // Example name to be inserted into the HTML
    
    let htmlContent = fs.readFileSync(__dirname + '/index.html', 'utf8');
    // Replace the placeholder with the actual name
    htmlContent = htmlContent.replace('{{ userName }}', name);
    res.end(htmlContent);
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});