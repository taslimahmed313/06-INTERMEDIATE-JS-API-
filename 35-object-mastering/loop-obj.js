const numbers = [3, 4, 5,34, 65,76];
/* for(const number of numbers){
    console.log(number);
} */

// For of Loop can not used get Objects Properties.....
const bottle = { color: "yellow", price: 50, isClean: true, capacity: "1ltr" };
const keys = Object.keys(bottle);
// console.log(keys);

/* 3 Ways to read an Object Property....... 
1---> bottle.color;
2---> bottle['color'];
3---> bottle[key];
*/
for(const key of keys){
    // console.log(key);
    // console.log(key, bottle[key]);
}

// Most of the Time to get Object Property  We are Used For in Loop
for(const key in bottle){
    // console.log(key, bottle[key]);
    const value = bottle[key];
    // console.log(key, value);
}

// Advanced In get value with Property.........
// const pair = Object.entries(bottle);
// console.log(pair);
for (const  [key, value] of Object.entries(bottle)){
    console.log(key, value);
}