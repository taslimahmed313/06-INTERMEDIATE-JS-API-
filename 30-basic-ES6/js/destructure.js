// Object Destructuring   ---Property name and Variable Name must be Same name
const fish = {
    name: 'RupChanda', 
    address : 'Podda Nodi',
    price: 300,
    age: '5 Month'
}
const {age} = fish;
const {address, price} = fish;
// console.log(age);

const {income} = {name: 'Mukhles Mia', age: 30, income: 40000 };
console.log(income);


// Array Destructuring 
const [first, second, third] = [13, 43,66,46];
console.log(first, third);

const nayoks = ['Shakib', 'Bappi', 'Somrat', 'Tele-Samad'];
const [hero, of, the , year] = nayoks;
console.log(hero, of, the, year);

// Array Function DeStructuring
function getPerson(){
    return ['Alim', 'Halim', 'Kolim'];
}
const [baba, kaka, vatija] = getPerson();
console.log(vatija, kaka, baba);



