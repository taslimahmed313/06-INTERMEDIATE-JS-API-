const numbers = [5, 23, 55, 90, 85, 34];
const fives = numbers.find(n => n % 5 === 0);
console.log(fives);
const allFives = numbers.filter(n => n % 5 === 0);
// console.log(allFives);

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
const cheapProduct = products.find(p => p.price < 20000);
console.log(cheapProduct);