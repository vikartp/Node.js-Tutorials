/**
 * Notes:
 * - Node.js provides a built-in `pipe` method for streamlining the process of reading
 * from a readable stream and writing to a writable stream.
 * - The `pipe` method handles the flow of data between streams, 
 * automatically managing the backpressure and ensuring that data is read
 * and written efficiently.
 * - Using `pipe` can simplify code and improve performance by reducing the need for 
 * manual event handling and data management.
 */

const fs = require('node:fs');

const readableStream = fs.createReadStream('./file1.txt', {
    encoding: 'utf8',
});

const writableStream = fs.createWriteStream('./file2.txt');

readableStream.pipe(writableStream);

// Note: We can chain multiple streams together using pipe. 
// However, the streams should be readable, duplex, or transform streams.

const zlib = require('node:zlib');

const gzip = zlib.createGzip();

readableStream
    .pipe(gzip) // Compress the data
    .pipe(fs.WriteStream('./file2.txt.gz')); // Write the compressed data to a new file
