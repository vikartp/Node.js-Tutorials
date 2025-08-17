/**
 * Notes:
 * - The `node:stream` module in Node.js provides an abstract interface for working with
 *  streaming data. It is a fundamental built-in module that enables efficient data handling,
 *  particularly when dealing with large amounts of information or real-time data flows,
 *  without needing to load all data into memory at once.
 * - The `stream` module provides the API for implementing the stream interface,
 *  although it's often not necessary to directly use this module to simply consume streams.
 *  Many built-in Node.js objects, like HTTP server requests (`http.IncomingMessage`) and
 *  standard output (`process.stdout`), are already stream instances.
 * - All stream instances in Node.js are also instances of EventEmitter, allowing them to emit 
 * and listen for events related to data flow, such as data, end, error, and drain.
 * 
 * 
 * - Buffer that stream uses has a default size of 64KB, meaning it will read data in chunks of 64KB at a time.
 * - HTTP request is a readable stream, and HTTP response is a writable stream.
 * - Types of streams:
 *   - Readable: Streams from which data can be read (e.g., Reading from a file, HTTP requests).
 *   - Writable: Streams to which data can be written (e.g., Writing to a file, HTTP responses).
 *   - Duplex: Streams that are both readable and writable (e.g., TCP sockets).
 *   - Transform: Duplex streams that can modify the data as it is read or written (e.g., zlib compression).
 */

const fs = require('fs');

const readableStream = fs.createReadStream('./file1.txt', {
    encoding: 'utf8',
    highWaterMark: 5 // Set the buffer size to 5 bytes for demonstration
});

const writableStream = fs.createWriteStream('./file2.txt');

readableStream.on('data', (chunk) => {
    console.log('New chunk received:', chunk);
    writableStream.write(chunk);
});
