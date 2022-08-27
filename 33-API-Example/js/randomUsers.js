const loadUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => displayUsers(data.results));
}
const displayUsers = users => {
    const usersContainer = document.getElementById('user-container');
    for(const user of users){
        console.log(user)
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
            <h3>User Name: </h3>
            <p>User Email: ${user.email}</p>
            <p>User Location: ${user.location.city}, ${user.location.country} </p>
        `;
        usersContainer.appendChild(div);
    }
}
loadUsers()