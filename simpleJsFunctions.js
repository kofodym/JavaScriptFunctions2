// create a function that checks if the input/parameter is an even number

function isEven(x) {
  //   let x;
  if (x % 2 === 0) {
    console.log(`${x} is an even number`);
  } else {
    console.log(`${x} is an odd number`);
  }
}

isEven(23);

// Create a function that prints to the console n1 to n2.
// Where n1 is the first input/parameter and n2 is the second input/parameter

function printOut(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    console.log(i);
  }
}

printOut(3, 8);

// create a function that sums the values in-between two numbers
// e.g calcFunc(1,3) returns 6 i.e 1,2,3

function sumValues(a, b) {
  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(`Sum of numbers is : ${sumValues(2, 5)}`);
