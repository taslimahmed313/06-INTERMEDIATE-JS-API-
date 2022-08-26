document.getElementById("change-bg").addEventListener('click', function(){
     const friends = document.getElementsByClassName("friend");
     for(const friend of friends){
        friend.style.backgroundColor = 'gray';
     }
});
document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friend-container');
    const friend = document.createElement('div');
    friend.innerHTML = `
    <h3>New Friend</h3>
    <p>This new Friend from the List</p>
    `
    friendContainer.appendChild(friend);
})