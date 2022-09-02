/* ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে।  */

const loadRandomUser = () => {
  url = "https://randomuser.me/api/?gender=female";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayRandomUser(data));
};

const displayRandomUser = (users)  => {
  console.log(users)
  const randomUserContainer = document.getElementById("random-user-container");
  // for(const user in users){
    // console.log(user);
    const randomDiv = document.createElement('div');
    randomDiv.innerHTML = `
    <img src = "${users.results[0].picture.large}">  
    <h2>Name : ${users.results[0].name.title} <span>${users.results[0].name.first}</span> <span>${users.results[0].name.last} </span> </h2>
    <h4>Seed: ${users.info.seed}</h4>
    <h5>Email : ${users.results[0].email} </h5>
    <h5>Phone: ${users.results[0].phone} </h5>
    <p>coordinates = latitude : ${users.results[0].location.coordinates.latitude}, <span>longitude: ${users.results[0].location.coordinates.latitude} </span></p>
    <p>Time Zone: ${users.results[0].location.timezone.offset}, <span>${users.results[0].location.timezone.description}</span> </p>
    <p>Location: ${users.results[0].location.state}, <span>${users.results[0].location.city}</span>, <span>${users.results[0].location.country}</span> </p>

      
    `;
    randomUserContainer.appendChild(randomDiv);

  // }
  
};

loadRandomUser();



