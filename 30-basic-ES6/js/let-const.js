// Break With VAR
// No More User VAR
// Let: Let it to reassign.......
// Const: do not allow to reassign........

let money = 34;
money = 16;
console.log(money);

const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
// console.log(bird);
const message = bird + ' potas potas';
console.log(message);
const numbers = [23, 54, 65, 12];
// reassign not allow
// numbers = [12, 32, 42, 54];
numbers.push(123,12);
numbers[1] = 30;
console.log(numbers);

const student = {
    name: 'Moffazzal',
    city: 'Mymnesingh'
}
// student = {name: 'Abdul'};
student.name = 'Abdul';
console.log(student);

sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    // You can change to Var(hoisting).......cause,let and const is block code.
    sum = sum + number;
    
}
// console.log(number);      Showing an Error...........