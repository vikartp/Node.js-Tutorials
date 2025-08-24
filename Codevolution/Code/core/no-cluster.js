const http = require('node:http');

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

/**
 * - PM2 is a Production Process Manager for Node.js applications with a built-in Load Balancer.
 * - Start your application with PM2 using the command: pm2 start .\no-cluster.js -i 0
 * - This command will start your application in cluster mode, utilizing all available CPU cores.
 * - You can monitor the status of your application using: pm2 status
 * - To stop your application, use: pm2 stop .\no-cluster.js 
 */