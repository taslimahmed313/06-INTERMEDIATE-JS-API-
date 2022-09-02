// Default Parameter..............
/* function add(num1 = 0, num2 = 0){
    const sum = num1 + num2;
    return sum;
}
const result = add(3, 7); */
// console.log(result);


// String Template Literals...........
/* const name = 'SamuleSon Broush';
const age = 43;
const person = `${name} is ${age} Years Old.`
console.log(person); */


// Spread Operator with Array Destructuring........
/* const numbers = [2, 3, 5, 4, 6, 7, 8];
const [first, second, third, ...fourth] = numbers; //Array Destructuring
console.log(fourth);
const number1 = [34, 54, 65];
const number2 = ['Malek', 'Salek', 'Alek'];
const numberCombined = [...number1, ...number2]; // Spread Operator Using
console.log(numberCombined); */



// Optional Chaining with Object Destructuring...........
/* const person = {
    name: "Mr. Mohiuddin",
    job : "Government Holder",
    salary: 47312
}
const {name, job, salary} = person; */ // Object Destructuring........
// console.log(job, salary, name);

// Nested Object
/* const nestedObject = {
    person : 'Mr Harish',
    study : 'Math',
    friends : [
        {name : 'Sakil Khan', age: 22, passion : 'Gardening'},
        {name : 'Iqbal Hossain', age : 23, passion : 'Cricket'},
        {name : 'Rahat Mirza', age : 21}
    ],
    subjects : ['Calculus', 'Statistics', 'Geometry'],
    money : 3000
}
const getThirdFriendPassion = nestedObject?.friends[3]?.passion; //Optional Chain
console.log(getThirdFriendPassion); */

// Function Destructuring.........
/* function getPerson(){
    // return ['Jony', 'Catty', 'Doggy']; // Array of Function
    const player = {name: 'Sakib', jersy : 75, category : 'A+'}; //Obj of Func
    return player;
} */
/* const [first, second, third] = getPerson();
console.log(first, second, third); */
// const {name, jersy, category} = getPerson();
// console.log(name, jersy, category);


//  Arrow Function....................-->
/* const twoPMeter = (a, b) => a * b;
const result = twoPMeter(3,4);
console.log(result); */

/* const onePMeter = x => x / 5;
const result = onePMeter(25);
console.log(result);
 */

/* const noPMeter = () => 3.1416;
const result = noPMeter();
console.log(result); */



// Array Method.........-->
// map()---------->
// const numbers = [34, 12, 58, 90, 29];
/* const dividedThree = numbers.map(a => a / 3);
console.log(dividedThree); */

// const multiTwo = numbers.map(x => x * 2);
// console.log(multiTwo);


// forEach()
// const person = ['Jamal', 'Kamal', 'Tomal', 'Nehal'].forEach(x => console.log(x.length));
// const numbers2 = [1, 2, 3, 4, 5].forEach((a) => console.log(a * 3));
// //  console.log(numbers2);
// const numbers3 = [1,2 , 3, 4, 5].map(a => a * 3);
//  console.log(numbers3);
// const personMap = ['Jamal', 'Kamal', 'Tomal', 'Nehal'].map(x => console.log(x));
// console.log(personMap);



// filter() and find().......................
// const filterNumber = [1, 2, 3, 4, 5].filter(x => x % 2 === 0);
// const filterNumber = [1, 2, 3, 4, 5].find(x => x % 2 === 0);
// console.log(filterNumber);

// // const filterMarks = [29, 43, 54, 67, 76, 67, 89].filter(x => x < 50);
// const filterMarks = [29, 43, 54, 67, 76, 67, 89].find(x => x < 50);
// console.log(filterMarks);

// const friends = ["Jamal Uddin", "Kamal Mia", "Tomal Sheikh", "Nehal"];
// // const filterFriend = friends.filter(f => f.length < 6);
// const filterFriend = friends.find(f => f.length > 6);
// console.log(filterFriend);


// reduce()...........
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = numbers.reduce((x, y) => x - y, 0);
console.log(total);
 */




