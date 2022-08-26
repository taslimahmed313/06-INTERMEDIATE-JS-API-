const numbers = [2, 3, 4, 5, 6,10];

function getDoubles(numbers){
    const output = [];
    for (const number of numbers) {
      const doubled = doubleIt(number);
      output.push(doubled);
    }
    return output;
}

function doubleItOld(num){
    return num * 2;
}

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble);

const makeDoubleDirect = numbers.map(num => num * 2);
const makeDoubleShort = numbers.map(x => x * 2);
// console.log(makeDoubleShort);
// console.log(makeDoubleDirect);
const fiveTimes = [1,2,3,4,5].map(x => x*5);
console.log(fiveTimes);
/* 
Purpose: 
1.get an array.
2. for every elements of the array do something 
3. store the result in an array
4. return the result array
*/

const result = getDoubles(numbers);
console.log(result);