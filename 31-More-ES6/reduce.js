const numbers = [1, 2, 3, 4, 5];
/* 
1. .reduce(accumulatorFunction, initialize Value)
2. accumulator Use Two Parameter(previous value, current value);
*/
const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total);
// Explanation This code
const totalEx = numbers.reduce((previous, current) => {
   console.log(previous, current);
    return previous + current
}, 0);