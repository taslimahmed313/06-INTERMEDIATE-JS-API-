const max = Math.max(130, 323, 5554, 4353,231);

const numbers = [12, 34, 54, 64];
const large = Math.max(...numbers);
// console.log(large);

const numbers2 = [...numbers];
numbers.push(300);
numbers2.push(200);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [23, 43,...numbers, 12, 43];
console.log(numbers4);
