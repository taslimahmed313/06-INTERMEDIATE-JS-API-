const student = {
    name: "Kadom Ali",
    money: 5000,
    study: "Math",
    subject: ['Calculus', 'algebra', 'geometry'],
    exam: function(){
        // console.log(this.name, "Is Participant in the exam.")
        return this.name + ' ' +"Is Participant in the exam.";
    },
    improveExam: function (subject){
        this.exam();
        return `${this.name} is taking improvement on ${subject}`;
    }, 
    treadDay : function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
const output = student.exam();
// console.log(output);
const reExam = student.improveExam("Math");
// console.log(reExam);
const remainBalance = student.treadDay(1200, 200);
console.log(remainBalance);
const dolaDay = student.treadDay(800, 100);
console.log(dolaDay);