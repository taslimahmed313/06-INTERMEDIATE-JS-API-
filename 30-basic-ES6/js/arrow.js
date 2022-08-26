// Function Declaration...........
function add(first, Second){
    const total = first + Second;
    return total;
}

// Function Expression..........
const add1 = function add1(first, Second){
    const total = first + Second;
    return total;
}

// Function Expression with Anonymous Function..........
const add2 = function (first, Second){
    const total = first + Second;
    return total;
}

// Function Declaration (no variable)...........
function add3(first, Second){
    return first + Second;
}

//Function Expression with Anonymous Function (no parameter storage in variable )
const add4 = function (first, Second){
    return first + Second;
}

// Arrow Function ...............
const add5 = (first, second) => first + second;

const result = add5(100,30);
console.log(result);


// Interview Question: difference Between Function Declaration (Regular Function ), Function Expression and Arrow Function...

