/**
 * Note: fs/promises is less performant than the regular fs module
 * when we consider the execution time and memory usage.
 */
const fs = require('node:fs/promises');

console.log('First');

fs.readFile('./file.txt', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });

console.log('Second');

// Note: Top level await is only available in ES modules or when using the `--experimental-top-level-await` flag.
// We will use async/await for better readability in a function context.
// Info: uncomment the following code to use async/await

// async function readFile() {
//     try {
//         console.log('First');
//         const data = await fs.readFile('./file.txt', 'utf-8');
//         console.log(data);
//         console.log('Second');
//     } catch (err) {
//         console.error('Error reading file:', err);
//     }
// }

// async function writeFile() {
//     try {
//         await fs.writeFile('./output.txt', 'Hello from output');
//         await fs.writeFile('./output-async.txt', 'Hello from output async');
//         await fs.writeFile('./output.txt', '\nAppending this text\n', { flag: 'a' });
//     } catch (err) {
//         console.error('Error writing file:', err);
//     }
// }

// readFile();
// writeFile();
