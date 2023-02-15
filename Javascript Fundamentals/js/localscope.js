// Local Scope
// can not be accessed from outside code bocks
// if - NOT VAR

let name = "bobo";

function calculate() {
  const name = "john";
  const age = 25;
  // code goes here
  becomesGlobal = "global variable";
}

calculate();
console.log(becomesGlobal);

if (true) {
  const name = "john";
}

console.log(`My name is ${name} and i'm awesome`);
