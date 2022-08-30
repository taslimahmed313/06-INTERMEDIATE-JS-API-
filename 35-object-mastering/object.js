// Create Objects Using Literals......
const player = {};
player.name = 'Shakib Al Hasan';
player.specialty = 'Batsman';
player.bat = function (){
    // console.log("It is Anonyms Function")
}
/* console.log(player);
player.bat(); */

const student = {
    name: 'Robinson Crusu',
    job: 'sailor',
    passion: function(){
        // console.log('IT is Passion Function......')
    },
    salary: 10000
}


// 2. Objects Constructor
const person = new Object();
// console.log(person);

// 3. Objects Create Method........
const item = Object.create(null);
// console.log(item);

const atel = Object.create(student);
// console.log(atel.name);

// 4. Class 
class Person {
    name = "Babul";
    address = "LalMonir Hat";
    constructor(age){
        this.age = age;
    }
}
const person1 = new Person(56);
// console.log(person1);

// Function
function car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new car('elon', 23);
console.log(tesla);
