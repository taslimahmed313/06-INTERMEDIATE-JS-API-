// console.log(this);
const KadomAli = {
  name: "Kadom Ali",
  money: 5000,
  study: "Math",
  subject: ["Calculus", "algebra", "geometry"],
  exam: function () {
    console.log(this);
    // console.log(this.name, "Is Participant in the exam.")
    return this.name + " " + "Is Participant in the exam.";
  },
  examArrow : () =>{
    console.log(this);
  },
  examNested: () =>{
    const arrow = () =>{
        console.log(this);
    }
    arrow();
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking improvement on ${subject}`;
  },
  treadDay: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};
KadomAli.exam();

const badamAli = {
  name: "Badam Ali",
  money: 6500,
};
badamAli.exam = KadomAli.exam;
badamAli.exam();

function clickHandler(){
    console.log("inside The button", this);
}
document.getElementById("button2").addEventListener('click', function(){
    console.log(this);
})