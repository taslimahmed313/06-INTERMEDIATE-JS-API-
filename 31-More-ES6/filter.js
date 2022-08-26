const numbers = [12, 43, 45, 66, 32,75];
const bigNumbers = numbers.filter(x => x > 40);
// console.log(bigNumbers);
const smallNumber = numbers.filter(n => n < 20);
// console.log(smallNumber);
const evenNumbers = numbers.filter(n => n % 2 === 0);
// console.log(evenNumbers);
const oddNumbers = numbers.filter(x => x % 2 === 1);
// console.log(oddNumbers);

const products = [
  {
    id: 1,
    brand: "Walton",
    name: "Mobile",
    price: 23000,
  },
  { id: 1, brand: "Oppo", name: "Ipad", price: 45000 },
  { id: 1, brand: "Huraiew", name: "Tablet", price: 12000 },
  { id: 1, brand: "Sumsang", name: "Monitor", price: 24000 },
];
const expenses = products.filter(product => product.price > 1000);
console.log(expenses);