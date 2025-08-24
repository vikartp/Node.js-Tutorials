/**
 * Notes:
 * - Worker Threads allow you to run JavaScript operations in parallel on multiple threads.
 * - It allows running multiple application threads within a single Node.js instance.
 * - Each worker thread has its own event loop but shares the same memory heap and v8 instance with the main thread.
 */

const http = require('node:http');
const { Worker } = require('node:worker_threads')

const server = http.createServer((req, res) => {

    if (req.url === '/compute') {
        const worker = new Worker('./worker.js');
        worker.on('message', (sum) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Computed sum: ${sum}`);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Default response');
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});