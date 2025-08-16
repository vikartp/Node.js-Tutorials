export const calculateArea = (length, width) => {
  return length * width;
}

export const calculatePerimeter = (length, width) => {
  return 2 * (length + width);
}

const add = (a, b) => {
  return a + b;
}
const subtract = (a, b) => {
  return a - b;
}

export default { add, subtract };
