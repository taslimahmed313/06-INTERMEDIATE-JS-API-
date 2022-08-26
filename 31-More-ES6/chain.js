const user = [
    {id: 1, job: 'doctor', income: 12300}
]
// console.log(user[0].income);

const id = {
    name: 'Abdullah',
    friends: [{name: 'malek', age: 30, job: 'Teacher'}, 
               {name: 'babul', age: 35, job: 'Farmer'}
]
}
const getfirstJob = id.friends[0].job;
// console.log(getfirstJob);

// Nested Object with Optional Chaining(?)
const userId = {
    id: 500, 
    name: 'Thomas Alba Edison', 
    address: {
        street: {
            first: '35/A Kochukhet Lane',
            second: 'third floor',
            third: 'right Side'
        }
    }
}
const getFloor = userId.address?.strt?.second;
console.log(getFloor);