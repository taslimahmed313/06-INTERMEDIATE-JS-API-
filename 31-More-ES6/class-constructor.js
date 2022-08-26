// syntactic sugar
class Instructor{
    // name = 'harris';
    name ;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    // location = 'aqua,badda';
    location ;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSessionTime(time){
        console.log(`Start the support session at ${time} `);
    }
    makeTheQuiz(module){
        console.log(`Make The Quiz in ${module}`)
    }
}
const harris = new Instructor('harris', 'auqua, badda');
console.log(harris);
harris.startSupportSessionTime('9:00pm');
harris.makeTheQuiz(40)

