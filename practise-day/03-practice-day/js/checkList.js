/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।  */

const person ={
    personName : 'Mr. Doggy',
    friends : {name: 'Ana', age: 16, money: 400},
    subject : ['Botany', 'Zoology', 'Chemistry'],
    favSub : function (){
        const info = `${this.personName}'s favorite Subject are ${this.subject[0]}, ${this.subject[1]}`;
        return info;
    },
    isHonest : true
}
const favorite = person.favSub();
// console.log(favorite);



/* ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।  */

const templateString = `${person.friends.name} is a ${person.personName}'s Friend. Her Favorite Subject is ${person.subject[2]} `;
// console.log(templateString);



/* ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।  */
const zeroPara = () => 89;
const result = zeroPara();
// console.log(result);



/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।  */
const twoPMeter = (a= 0, b = 0) =>{
    const add = a + b;
    const final = add / 2;
    return final;
}
const output = twoPMeter(12, 8);
// console.log(output);



/* ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */
const multiLine = (x, y) => {
    const xAdd = x + 7;
    const yAdd = y + 7;
    const allAdd = xAdd + yAdd;
    return allAdd;
}
const addition = multiLine(3,13);
// console.log(addition);




/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
 */
const numbers = [7, 21, 14, 28, 49, 42];
const arrayMap = numbers.map(x => x / 7);
// console.log(arrayMap);



/* ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  */
//  map summary()
/* 
১) map আরের প্রত্যেকটা উপাদানকে একটি আরেতে ফিরিয়ে দেয় ।
২) এটা ভ্যালু রিটার্ন করে থাকে ।
*/
// forEach()
/* 
১) forEach অ্যারের প্রত্যেকটা উপাদানকে ফিরিয়ে দেয়, যা লুপের ফলাফলের মত দেখায়
২) forEach ভ্যালু রিটার্ন করে না, ফলে ব্রাকেটের বাইরে একে ব্যাবহার করা যায় না !!
*/
// filter()
/* 
1) filter() ভ্যালু অ্যারেতে ফিরিয়ে দেয় যখন নির্দিষ্ট শর্ত পূরন করে ।
*/
// find()
// 1) find() নির্দিষ্ট শর্ত পূরন করলেও শুধুমাত্র প্রথম উপাদান ফিরিয়ে দেয়  কিন্তু, অ্যারেতে ফিরিয়ে দেয় না !!!!



/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */

const player = {name: 'Sakiib', jersy: 75, catagroy: 'allrounder'};
const {name, jersy, catagroy} = player;
// console.log(name, jersy, catagroy);

const book = ['Galubers Trabel', 'Hemlet', 'Edipass-mevi', 'Othelo'];
const [first, balance, third, ...fourth] = book;
// console.log(balance);





