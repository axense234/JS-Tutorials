// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable(expression), passed as an argument to another function,return from the function(closure)

// Higher Order function - accepts another function as an argument or returns another funciton as a result

// Callback Function - passed to a another function as an argument and executed inside the function

/*
function greetMornning(name) {
  const myName = "John";
  console.log(`Good morning ${name}, my name is ${myName}`);
}

greetMornning("Bobo");
*/

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
  const myName = "John";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("bobo", morning);
greet("Peter ", afternoon);
