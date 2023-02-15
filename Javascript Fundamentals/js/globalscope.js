// Global Scope
// any variable outside code block {} is said to be in Global Scope
// can be accessed anywhere in the program
// Gotchas: name collisions, modify by mistake

let name = "bobo";
name = "peter";

function calculate() {
  // some other code...
  console.log(name);
  name = "orange";
  function inner() {
    name = "inner name value";
    console.log(`this is from inner function ${name}`);
  }
  inner();
}

calculate();

if (true) {
  console.log(name);
  name = "pants";
}

console.log(`My name is ${name} and i'm awesome`);
