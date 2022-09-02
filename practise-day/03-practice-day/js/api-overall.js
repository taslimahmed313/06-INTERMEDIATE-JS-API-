// API চেকলিস্ট 

/* ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
 */

const loadComment = () => {
    url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayComment(data));
}


/* ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।  */

/* ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে।  */

const displayComment = comments => {
    const commentContainer = document.getElementById('comment-container');
    comments.forEach(comment => {
        // console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('border', 'm-3' , 'p-4')
        commentDiv.innerHTML = `
            <h2>Id : ${comment.id}</h2>
            <h3>Name : ${comment.name}</h3>
            <p>Email : ${comment.email}</p>
            <p>${comment.body}</p>
            <button onclick = "loadCommentDetails('${comment.id}')">Click Details</button>
        `;
        commentContainer.appendChild(commentDiv);
    });
}


/* ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।  */

// loadComment();


/* ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।  */

const loadCommentDetails = (id) =>{
    url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayCommentDetails(data));
}
const displayCommentDetails = comment =>{
    const commentDetailsContainer = document.getElementById("comment-details");
    commentDetailsContainer.innerHTML = `
        <h2>Id : ${comment.id}</h2>
        <h3>Name : ${comment.name}</h3>
        <p>Email : ${comment.email}</p>
        <p>${comment.body}</p>
    `;
}











// JSON stringify and JSON 
/* const person = ['kamal', {name: 'Ratul'} ,'jamal', 'tamal', 'namal'];
const personStringify = JSON.stringify(person);
const personParse = JSON.parse(personStringify);
console.log(personStringify);
console.log(personParse); */

/* fetch('url')
.then(res => res.json())
.then(data => console.log(data)); */