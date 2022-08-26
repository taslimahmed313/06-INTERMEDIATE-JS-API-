const numbers = [21, 42, 63, 81];
const thrid = numbers.map(x => x / 3);
// console.log(thrid);

const friends = ['Tom Hnaks', 'Tom Cruse', 'Tom Solaiman', 'Tom Ananto'];
const firstLetter = friends.map(friend => friend[0]);
// console.log(firstLetter);
const friendLength = friends.map(F => F.length);
// console.log(friendLength);


// Using map() in Array-Object
const products = [{
    id: 1 , brand: 'Walton', name: 'Mobile', price: 23000},
    {id: 1 , brand: 'Oppo', name: 'Ipad', price: 45000},
    {id: 1 , brand: 'Huraiew', name: 'Tablet', price: 12000},
    {id: 1 , brand: 'Sumsang', name: 'Monitor', price: 24000}
]
const productArray = products.map(product => product);
// console.log(productArray);
const productBrand = products.map(b => b.brand);
// console.log(productBrand);
const productName = products.map(n => n.name);
// console.log(productName);
const productPrice = products.map(p => p.price);
console.log(productPrice);
