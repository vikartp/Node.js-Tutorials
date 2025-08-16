// First approach of importing calculate.mjs
import ops, { calculateArea, calculatePerimeter } from './calculate.mjs';

console.log(calculateArea(5, 10));          // 50
console.log(calculatePerimeter(5, 10));     // 30
console.log(ops.add(5, 10));         // 15
console.log(ops.subtract(10, 5));   // 5
// const { add, subtract } = ops;
// console.log(add(5, 10));         // 15
// console.log(subtract(10, 5));   // 5

// Second approach of importing calculate.mjs
// import * as clc from './calculate.mjs';    

// console.log(clc.calculateArea(5, 10));          // 50
// console.log(clc.calculatePerimeter(5, 10));     // 30
// console.log(clc.default.add(5, 10));            // 15
// console.log(clc.default.subtract(10, 5));       // 5

// Third approach of importing calculate.mjs
// import { calculateArea, calculatePerimeter, default as ops } from './calculate.mjs';

// const { add, subtract } = ops;
// console.log(calculateArea(5, 10));          // 50
// console.log(calculatePerimeter(5, 10));     // 30
// console.log(add(5, 10));         // 15
// console.log(subtract(10, 5));   // 5

// Fourth approach of importing calculate.mjs
// import clc, { calculateArea as clcArea, calculatePerimeter as clcPrm} from './calculate.mjs';

// console.log(clcArea(5, 10));          // 50
// console.log(clcPrm(5, 10));           // 30
// console.log(clc.add(5, 10));           // 15
// console.log(clc.subtract(10, 5));     // 5