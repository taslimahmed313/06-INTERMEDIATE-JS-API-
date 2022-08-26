/* function add(first, second){
    console.log(first,second);
    // second = second || 0;
    // if(second === undefined){
    //     second = 0 ;
    // }
    const total = first + second;
    return total;
} */

function add(first = 0, second = 0){
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result);

function fullName(first, last = 'Chowdury'){
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Aslam');
console.log(name);