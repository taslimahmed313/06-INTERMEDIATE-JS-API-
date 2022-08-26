const add = (first, second) => first + second;
const fullName = (first, last) => first + ' ' + last;
const multiple = (first, second) => first * second;
const result = multiple(5,6);
// console.log(result);

// Multiple Parameter in Arrow Function
const addAll = (a, b, c, d, e) => a + b + c + d + e;

// No parameter in Arrow Function 
const getPie = () => 3.1416;

// Single Parameter in Arrow Function
const doubleIt = (num) => num * 2;

// Single Parameter Simplified Version in Arrow Function..........
const fiveTimes = first => first * 5;


// Multi Line Arrow Function..........
// IF you want to return something, Use the 'return'......
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiply = firstSum * secondSum;
    const result = multiply / 2;
    return result;
}