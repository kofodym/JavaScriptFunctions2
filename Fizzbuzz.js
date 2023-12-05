// Class work FizzBuzz
// Write a program that prints the numbers from 1 to 100.
//But for multiples of three print “Fizz” instead of the number
//and for the multiples of five print “Buzz”.
//For numbers which are multiples of both three and five
//print “FizzBuzz”.

// The divisibility rule of 3 states that if the sum of digits of a number is a multiple of 3,
// the number will be completely divisible by 3.

function printOuts() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} is FizzBuzz`);
    }
    else if(i % 3 === 0) {
      console.log(`${i} is Fizz`);
    } else if (i % 5 === 0);
    {
      console.log(`${i} is Buzz`);
    }
  }
}

console.log(printOuts());

// function printOuts() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// printOuts();
