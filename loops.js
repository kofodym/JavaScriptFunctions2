const base = 0;
const exp = 3;
let result = 1;

// cw2
const base2 = 0;
const exp2 = 3;
let result2 = 1;

while (exp2 > base2) {
  result2 *= 2;
  exp2 -= 1;

  console.log(result, "calculating");
}

console.log({ result });

// cw3

const userObj = {
  name: "Emmanuel",
  age: 33,
  amount: 0,
};
const base3 = 10;
const giveOut = 300;

while (base3 > 1) {
  user.amount += giveOut * base3;
  base3 -= 1;
  console.log("becoming rich...");
}
console.log(user);

// do{
//block
// }
// while(true)

// forloop

let num = 0;
let results_for = 0;
for (let i = 0; i <= num; i++) {
  if (results_for == 6) {
    continue;
  }
  if (i % 2 === 0) {
    results_for += i;
  }
}

// object

const users_obj = {
  name: "EmmaDans",
  age: 31,
  amount: 0,
};
console.log(users_obj);

// switch statement

function greetings() {
  switch (title) {
    case "Mr":
      console.log("Hello sir");
      return;
    case "Mrs":
      console.log("Hello ma'am");
    // break;

    default:
      console.log("Hello no value here");
      result;
  }
}

greetings("Mrssss");

// Class work FizzBuzz
// Write a program that prints the numbers from 1 to 100.
//But for multiples of three print “Fizz” instead of the number
//and for the multiples of five print “Buzz”.
//For numbers which are multiples of both three and five
//print “FizzBuzz”.
