const crypto = require('node:crypto');
const os = require('node:os');

console.log(`Number of CPU cores: ${os.cpus().length}`);
console.log('Available parallelism: ', os.availableParallelism());
process.env.UV_THREADPOOL_SIZE = 8; // Default is 4
// Note: If the above setting doesn't reflect try to use $env:UV_THREADPOOL_SIZE = 6 in the terminal

/**
 * Synchronous password hashing example
 */

function synchronousHash(calls) {
    const start = Date.now();

    for (let i = 0; i < calls; i++) {
        crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    }

    const end = Date.now();
    console.log(`Password hashing took ${end - start} milliseconds`);
}

// synchronousHash(3); // Change the argument to test different call counts


/**
 * Asynchronous password hashing example
 */

function asynchronousHash(calls) {
    const start = Date.now();

    for (let i = 0; i < calls; i++) {
        crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
            const end = Date.now();
            console.log(`Password hashing took ${end - start} milliseconds`);
        });
    }

}

asynchronousHash(20); // Change the argument to test different call counts
console.log(process.env.UV_THREADPOOL_SIZE);

/**
 * Notes:
 * - The synchronous version blocks the event loop, while the asynchronous version does not.
 * - The default thread pool size is 4, but it can be increased as needed.
 * - Increasing the thread pool size can improve performance for CPU-bound tasks.
 * - If we increase the thread pool size, it helps in performance by allowing more concurrent operations 
 * but that is limited to the number of available CPU cores.
 * - If we set UV_THREADPOOL_SIZE to a value higher than the number of CPU cores,
 * the operating system has to juggle between the threads. And hence it may lead to context switching overhead.
 * That will impact the performance negatively. It will take more time to complete the same tasks.
 */