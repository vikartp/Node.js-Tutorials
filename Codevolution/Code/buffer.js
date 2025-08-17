const buffer = new Buffer.from('Vikash');

console.log(buffer); // <Buffer 56 69 6b 61 73 68> => Hexadecimal representation
console.log(buffer.toString('utf8')); // Vikash
console.log(buffer.toString()); // Vikash
console.log(buffer.toJSON()); // { type: 'Buffer', data: [ 86, 105, 107, 97, 115, 104 ] }
console.log(buffer.length); // 6
console.log(buffer[0]); // 86
console.log(buffer[1]); // 105

// Write to a buffer
buffer.write('Code')
console.log(buffer.toString()); // Codeash

// Write with more bytes than the buffer can hold
buffer.write('Codevolution');
console.log(buffer.toString()); // Codevo, not Codevolution because the buffer is only 6 bytes long