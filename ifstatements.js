const prompt = require("prompt-sync")();

function greetings(t, n, a) {
  if (title === "Mr") {
    return `Hello ${title} ${name} you are ${age} years old`;
  } else if (title === "Mrs") {
    return `Hello ${title}  ${name} you are ${age} years old`;
  } else if (title === "Miss") {
    return `Hello ${title} ${name} you are ${age} years old`;
  } else {
    return `Hello stranger`;
  }
}

let title = prompt("What is your title?");
let name = prompt("What is your name?");
let age = prompt("What is your age?");

const message = greetings(title, name, age);
// const message = greetings("Miss", "Ruth", 33);
console.log({ message });
