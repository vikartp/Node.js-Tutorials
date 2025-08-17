/**
 * The 'path' module provides utilities for working with file and directory paths.
 * It allows you to manipulate file paths in a platform-independent way, making it easier to work
 * with file systems across different operating systems.
 * The 'node:' prefix is optional and indicates that this is a built-in module.
 */
const path = require('node:path')

console.log(__filename) // Full path of the current file
console.log(__dirname) // Current directory path

// Base name
console.log(path.basename(__filename)) // Outputs the name of the current file
console.log(path.basename(__dirname)) // Outputs the name of the current directory

// Extension name
console.log(path.extname(__filename)) // Outputs the extension of the current file
console.log(path.extname(__dirname)) // Outputs an empty string since directories don't have extensions

// parse and format paths
const parsedPath = path.parse(__filename)
console.log(parsedPath) // Outputs an object with properties like root, dir, base, ext, and name
const formattedPath = path.format(parsedPath)
console.log(formattedPath)

// isAbsolute
console.log(path.isAbsolute(__filename)) // true, because it's an absolute path
console.log(path.isAbsolute('./data.json')) // false, because it's a relative path

// join
console.log('join paths: Join all arguments together and normalize the resulting path.')
console.log(path.join('folder1', 'folder2', 'file.txt')) // Joins the paths
console.log(path.join('/folder1', 'folder2', 'file.txt'))
console.log(path.join('/folder1', '//folder2', 'file.txt'))
console.log(path.join('/folder1', '//folder2', '../file.txt'))
console.log(path.join(__dirname, 'data.json')) // Joins the current directory with 'data.json'

// resolve
console.log('resolve paths: Resolves a sequence of paths or path segments into an absolute path.')
console.log(path.resolve('folder1', 'folder2', 'file.txt')) // Resolves the paths to an absolute path
console.log(path.resolve('/folder1', 'folder2', 'file.txt')) // Resolves to an absolute path
console.log(path.resolve('/folder1', '//folder2', 'file.txt')) // Resolves to an absolute path
console.log(path.resolve('/folder1', '//folder2', '../file.txt')) // Resolves to an absolute path
console.log(path.resolve(__dirname, 'data.json')) // Resolves the current directory with 'data.json'    
