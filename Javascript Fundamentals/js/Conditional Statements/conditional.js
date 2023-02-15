// Conditional Statements
// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !===
// else if and !

const value = 2 > 1;
const value2 = 1 > 2;

if (value2) {
  console.log("Hello world");
} else {
  console.log("Hello people");
}

const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

if (num1 > num2) {
  console.log("First number is bigger than second");
} else if (result) {
  console.log("The numbers are equal");
} else {
  console.log("Second number is bigger than first");
}

const value3 = false;

if (!value3) {
  console.log("Value is false");
}

const number1 = 6;
const number2 = "6";
const value4 = number1 == number2;
const value5 = number1 === number2;

console.log(value4);
console.log(value5);

// Logical Operators
// ===================
// (|| - OR), (&& - AND), !

const name = "Peter";
const age = 26;

if (name !== "bob" /*||*/ && age === 24) {
  console.log("Hello there user");
} else {
  console.log("Wrong values");
}
