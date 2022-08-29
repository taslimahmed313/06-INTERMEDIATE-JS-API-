const loadPhones = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones =>{
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.textContent = '';
    /* for(const phone of phones){
        console.log(phone);
    } */
    phones.forEach(phone => {
        // console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
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
              </div>
            </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
}

document.getElementById("btn-search").addEventListener('click', function(){
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadPhones(searchText);
    searchField.value = '';

});
loadPhones();