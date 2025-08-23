const https = require('node:https');
const crypto = require('node:crypto');

const MAX_CALLS = 20;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
    https.get('https://www.google.com', (res) => {
        res.on('data', () => { });
        res.on('end', () => {
            const duration = Date.now() - start;
            console.log(`Request ${i + 1} took ${duration} milliseconds`);
        });
    });
}

/**
 * Experiment with blocking I/O using the crypto module, change delay and experiment
 */
setTimeout(() => {
    console.log('Blocking I/O from timeout');
    crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    console.log('First call completed');
    // crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    // console.log('Second call completed');
    // crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    // console.log('Third call completed');
    // crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    // console.log('Fourth call completed');
}, 800);

/**
 * Notes:
 * - Although both crypto.pbkdf2 and https.get are asynchronous, their performance characteristics differ.
 * - The crypto.pbkdf2 function is CPU-bound, while https.get is a network I/O-bound.
 * - https.get is affected by network latency and bandwidth, while crypto.pbkdf2 is not.
 * - https.get is not affected by CPU core either.
 * - https.get method does not seem to use the thread pool. It also does not block the event loop.
 * - Increasing the thread pool size can improve performance for CPU-bound tasks.
 * - Libuv is responsible for managing the thread pool and handling asynchronous I/O operations in Node.js.
 * - Libuv delegates the Network I/O operations to the operating system kernel. Whenever possible,
 * it will poll the kernel for I/O events and notify the appropriate callbacks in the event loop.
 * - Since Network I/O operations are handled by the OS kernel, they do not occupy threads in the thread pool.
 * There is a different mechanism for each OS. We have epoll (Linux), kqueue (macOS), and IO Completion Ports (Windows).
 */