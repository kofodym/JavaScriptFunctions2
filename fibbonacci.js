// Create a function that returns Fibonacci.function much accept two paramater

// Fibonacci sequence is a sequence in which each number is equal to the sum of the previous two numbers.
// fn = fn-1 +fn-2

function fibonacci_nos(param1, param2) {
  let setOfNos = [];

  setOfNos[0] = param1;
  setOfNos[1] = param2;
  // setOfNos[2] = param3;
  for (let i = 2; i < 12; i++) {
    setOfNos[i] = setOfNos[i - 1] + setOfNos[i - 2];
  }
  return setOfNos;
}

console.log(fibonacci_nos(0, 1));
