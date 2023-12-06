// The Factorial of a whole number 'n'
// is defined as the product of that number with every whole number less than
// or equal to 'n' till 1. For example, the factorial of 4 is 4 × 3 × 2 × 1
// n! = n * (n-1) * (n-2) * (n-3) … *(n-(n-1))*.

function factorial(n) {
  let factorialProduct = 1;

  //    for loop is used to calculate the factorial of a given number by iterating from the given number down to 1
  for (let i = 1; i <= n; i++) {
    // ! = n * (n-1) ....
    factorialProduct = factorialProduct * i;
  }
  return factorialProduct;
}

console.log(factorial(4));
