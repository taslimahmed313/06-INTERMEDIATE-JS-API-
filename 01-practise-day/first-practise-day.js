// 01 -  Difference of VAR, LET and CONST
var firstName = 'Malek Mia';
// console.log(firstName);

firstName = 'Kalek Mia';
// console.log(firstName);

var firstName = 'Mia Vai';
// console.log(firstName);


// LET
let lastName = 'Shorif Uddin';
// console.log(lastName);

lastName = 'Kamal Mia';
// console.log(lastName);

/* let lastName = 'Jubaida Hatun'  */  // You don't declare same name !!!!!


// CONST
const fullName = 'Sihab Uddin Tushar';
// console.log(fullName);
/* 
fullName = 'Kutub Uddin'    */// You don't reassign...........

/* const fullName = "Sihab Uddin Tushar"; */ // You don't declare same name !!!!!

// Object Declaration............
const farmer = {
    name: 'Kamal Mia',
    age : 34,
    job : 'Teacher'
}

//  02 - Make a TemplateString with variable and two Object Property's Value
const templateString = `${fullName} is a ${farmer.job}.His age is ${farmer.age}.  `;
// console.log(templateString);


// 03.1 - Declare a single Parameter Arrow Function

const fiveDivision = divided => divided / 5;
// console.log(fiveDivision(239));


// 03.2 - Declare a Two-parameter Function Which parameter add 2 and multiply each other.............
const twoPMeter = (a,b) => (a + 2) * (b + 2);
// console.log(twoPMeter(3,8));


// 03.3 - Declare a Three-parameter Function Which parameter  multiply each other.............
const threePMeter = (x,y,z) => x * y * z;
// console.log(threePMeter(2,3,4));


// 03.4 -এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const twoPMeterMultiLine = (n,m) => {
    const addN = n + 2;
    const addM = m + 2;
    const multiplyParameter = addN * addM;
    return multiplyParameter;
}
// console.log(twoPMeterMultiLine(18, 8));

/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map 
ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

const arr = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
const multiplyArray = arr.map(multi => multi * 5);
// console.log(multiplyArray);


/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  */

const getOdd = arr.filter( n => n % 2 === 1);
// console.log(getOdd);



/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */

const priceArray = [
  {id: 1, price: 2100, },
  {id: 1, price: 2000, },
  {id: 1, price: 3000, },
  {id: 1, price: 32000, },
  {id: 1, price: 4000, },
  {id: 1, price: 6000, },
  {id: 1, price: 22000, },
];
const findLimit = priceArray.find(({price}) => price > 5000);
// console.log(findLimit);


/* ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  */







/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। */

const destrucArray = [13, 43, 30, 67, 87];
const [one, two , three] = [13, 43, 30, 67, 87];
// console.log(three);


// NO Needed..........
/* const destrucArray = [13, 43, 30, 67, 87];
let three = 0;
function some() {
  const [a, b, c] = destrucArray;
  three = c;
}
some(destrucArray);
console.log(three); */


/* ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।  */

function addThree (x, y, z = 7){
  const add = x + y + z;
  return add;
}
const result = addThree(1,2);
// console.log(result);


/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

const nestedObject = {
  name: 'Raihan Seikh',
  class : 10,
  location: {area: 'Gulshan', street: '23/A, Susmita Bylane'},
  marks : [89, 98, 60, 80],
  details: {hobby: 'Gardening', friends: ['Limon', 'Kamal', 'Jalil']}
}
// console.log(nestedObject.details.friends[1]);


/* ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।  */
