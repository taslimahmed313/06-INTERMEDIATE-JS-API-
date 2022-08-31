/* const first = {a: 2};
const second = {a: 2}; */
// const third = second;
/* if(third === second){
    console.log("They are Same");
}
else{
    console.log("They are Different")
} */

// Do not use this method (Bangla Method)......
const first = { a: 2, b : 3, c : 4, d:3};
const second = { a: 2, c : 4, b : 3 }; 
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
/* console.log(firstString, secondString);
if(firstString === secondString){
    console.log("Same");
}
else{
    console.log("Different")
} */

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    // console.log(firstKeys, secondKeys);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }return true;
    }
    else{
        return false;
    }
}
const result = compareObject(first, second);
console.log(result);