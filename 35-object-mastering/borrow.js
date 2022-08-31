const KadomAli = {
  name: "Kadom Ali",
  money: 5000,
  study: "Math",
  subject: ["Calculus", "algebra", "geometry"],
  exam: function () {
    // console.log(this.name, "Is Participant in the exam.")
    return this.name + " " + "Is Participant in the exam.";
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
const output = KadomAli.exam();
// console.log(output);

const badamAli = {
    name: "Badam Ali",
    money : 6500
}
const result = KadomAli.exam.call(badamAli);
// console.log(result);
const badamMoney = KadomAli.treadDay.call(badamAli, 300, 200);
console.log(badamMoney);
const badamMoney2 = KadomAli.treadDay.apply(badamAli, [800, 200]);
console.log(badamMoney2);
const badamMoney3 = KadomAli.treadDay.bind(badamAli);
const remain = badamMoney3(200, 300);
console.log(remain);


const food = { beef: '🥩', bacon: '🥓' }
console.log(food);

// "Spread"
const spreadClone = { ...food };
console.log(spreadClone);


// "Object.assign"
const assignClone = Object.assign({}, food);
console.log(assignClone);


// "JSON"
const jasonClone = JSON.parse(JSON.stringify(food));
console.log(jasonClone);

// RESULT:
// { beef: '🥩', bacon: '🥓' }