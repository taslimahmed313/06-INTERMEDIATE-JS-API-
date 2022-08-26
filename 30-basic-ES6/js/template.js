/* 3 Way to declare a String.........
1. const person1 = 'Abdul Jalil';
2. const person2 = "Mohamamd Kamal";
3. const person3 = `Abul Khayer`;
*/

/*This is so Wired Process to write a Multi LIne String .........
const multiLIneString = 'This is the first of Text \n' + 
'It is High Time \n' + 
'It is Third Line of the Text'; 
console.log(multiLIneString); */

const newMultiLineString = `This is First line of test
This is Second Line of Text
This Third Line of Text.`
// console.log(newMultiLineString);

// Old Process............
const a = 10;
const b = 23;
const summary = 'sum of : ' + a + ' and ' + b + ' is : ' + (a+b);
// console.log(summary);

// EcmaScript6 
const newSummary = `sum of : ${a} and ${b} is : ${(a+b)}`
// console.log(newSummary);