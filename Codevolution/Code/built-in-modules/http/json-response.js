const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end({ message: 'Hello, World!' }); // This line is incorrect for JSON response
    // Use JSON.stringify to convert the object to a JSON string
    res.end(JSON.stringify({ message: 'Hello, World!' }));
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
