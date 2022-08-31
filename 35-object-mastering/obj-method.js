const bottle = {color: 'yellow', price: 50, isClean : true, capacity: '1ltr'};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);
/* const twoDimension = [ ["color", "yellow"], ["price", 50], ["isClean", true],
  ["capacity", "1ltr"] ]; */

//   console.log(bottle);
//   Object.seal(bottle);
//   delete bottle.color;
  bottle.price = 100;   // Change this property value
  bottle.height = 5.6;  // Seal--> you can not add or remove any property of Obj.
//   console.log(bottle);