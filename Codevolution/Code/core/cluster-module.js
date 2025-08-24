/**
 * Notes:
 * - Cluster module can be used to create child processes that share the same server port.
 * - It creates multiple Node.js instance(process).
 * - The new processes created through cluster.fork() has a separate Memory space, V8 engine instance and event loops
 */
const http = require('node:http');
const cluster = require('node:cluster');

if (cluster.isMaster) {
    cluster.schedulingPolicy = cluster.SCHED_RR;// Force round-robin
    const numCPUs = require('node:os').cpus().length;
    console.log(`Master process is running with PID: ${process.pid}`);
    console.log(`Forking ${numCPUs} workers...`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
        cluster.fork();
    });
} else {
    console.log(`Worker process started with PID: ${process.pid}`);
    const server = http.createServer((req, res) => {

        if (req.url === '/compute') {
            console.log(`Worker ${process.pid} is handling the request.`);
            // Simulate a CPU-intensive task
            let sum = 0;
            for (let i = 0; i < 6 * 1e9; i++) {
                sum += i;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Computed sum: ${sum}`);
        } else {
            console.log(`Worker ${process.pid} is handling a default request.`);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Default response');
        }
    });

    server.listen(3000, 'localhost', () => {
        console.log('Server running at http://localhost:3000/');
    });
}