/* ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
 */
const loadPhotos = () =>{
  const url = "https://jsonplaceholder.typicode.com/photos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhotos(data))
}

const displayPhotos = photos =>{
    const photoContainer = document.getElementById("photo-container");
    photos.forEach(photo => {
        // console.log(photo)
        const divPhoto = document.createElement('div');
        divPhoto.classList.add('photo');
        divPhoto.innerHTML = `
         <div class="card h-100">
      <img onclick = "loadPhotosDetails('${photo.id}')" src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${photo.title}</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
        `;
        photoContainer.appendChild(divPhoto);
    });
}


/* ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে।  */


const loadPhotosDetails = (id) =>{
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhotosDetails(data));
}

const displayPhotosDetails = photo => {
  console.log(photo)
  const photoDetailsContainer = document.getElementById("photo-details-container" );
    photoDetailsContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${photo.title}</h5>
    
  </div>
</div>
  `;
}
loadPhotos();

/* ৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।  */