const loadPhones = async(searchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit ) =>{
  const phoneContainer = document.getElementById("phones-container");
  phoneContainer.textContent = "";
  /* for(const phone of phones){
        console.log(phone);
    } */
  // Display 10 Phones Only
  const viewAll = document.getElementById("view-all");
  if (dataLimit && phones.length > 6) {
    phones = phones.slice(0, 10);
    viewAll.classList.remove("d-none");
  } else {
    viewAll.classList.add("d-none");
  }
  const noPhone = document.getElementById("no-phone-message");
  if (phones.length === 0) {
    noPhone.classList.remove("d-none");
  } else {
    noPhone.classList.add("d-none");
  }
  // console.log(phones);
  phones.forEach((phone) => {
    // console.log(phone);
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
            <div class="card h-100">
              <img src="${phone.image}" class="card-img-top p-4" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button onclick = "loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Phone Details</button>
              </div>
            </div>
        `;
    phoneContainer.appendChild(phoneDiv);
  });
  // Stop Loading Spinner........
  toggleSpinner(false);
}

const searchProcessing = (dataLimit) =>{
  // Start Loader or Spinner
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText,dataLimit);
  // searchField.value = "";
}

// Handle the Search Button..........
document.getElementById("btn-search").addEventListener('click', function(){
  const noPhone = document.getElementById("no-phone-message");
  noPhone.classList.add("d-none");
  searchProcessing(10);
});

const toggleSpinner = isLoading =>{
  const loader = document.getElementById("loader");
  if(isLoading){
    loader.classList.remove('d-none')
  }
  else{
    loader.classList.add('d-none');
  }
}

document.getElementById("btn-view-all").addEventListener('click', function(){
  searchProcessing();
});

document.getElementById("search-field").addEventListener("keyup", function (e) {
  // console.log(e.key)
  if (e.key === "Enter") {
    searchProcessing(10);
  }
});

const loadPhoneDetails = id =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone =>{
  console.log(phone);
  const phoneTitle = document.getElementById("exampleModalLabel");
  phoneTitle.innerText = phone.name;
  const phoneDetails = document.getElementById("phone-details"); 
  phoneDetails.innerHTML = `
    <p>Release Date: ${
      phone.releaseDate ? phone.releaseDate : "No found Release Date."
    } </p>
    <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : "No Storage Found"}</p>
    <p>Others : ${
      phone.others ? phone.others.Bluetooth : "No Information Found"
    }</p>
  `;
}


loadPhones('apple');

