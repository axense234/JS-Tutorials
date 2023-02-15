// Functions - declare, invoke
// params - when declare/define
// placeholders - when invoke/call/run
// use vars/values, multiple params, undefined

// Default Names for hello function
const name1 = "Peter";
const name2 = "John";
const name3 = "Anna";

// Default numbers for calculate_2_numbers function
const num1 = 4;
const num2 = 6;

function hello(name1, name2, name3) {
  // Greet 3 people
  console.log("Hello There " + name1);
  console.log("Hello There " + name2);
  console.log("Hello There " + name3);
}

hello("Bob", "Anna", "John");
// greet Bob, Anna and Jonh
console.log(" ");
hello("Michelle", "Smilga", "Daniel");
// greet Michelle, Smilga and Daniel
console.log(" ");
hello("Susy", "Kate", "Banana");
// greet Susy, Kate, Banana
console.log(" ");

function calculate_2_numbers(num1, num2) {
  // Sum of the 2 numbers
  console.log(num1 + num2);
  // Subtraction of the 2 numbers
  console.log(num1 - num2);
}

calculate_2_numbers(10, 5);
calculate_2_numbers(num1, num2);

console.log(" ");

// 1 inch - 2.54cm

const wallHeight = 80;

function calculate(value) {
  // const newValue = value * 2.54;
  console.log("The value in cm is: " + value * 2.54 + " cm");
  return value * 2.54;
}
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];

console.log(dimensions);

function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

console.log(" ");

const values = [firstValue, secondValue];
console.log(values);

console.log(" ");
// =====================================
// Expressions -another way to define a function
// create a variable, assign to FUNCTION(not value), use var
// diff -hoisting, use- arrow func, libraries,

const add1 = function (num1, num2) {
  return num1 + num2;
};
const add2 = function addValues(num1, num2) {
  return num1 + num2;
};

const thirdValue = add1(5, 6);
const values2 = [firstValue, secondValue, thirdValue];
console.log(values2);
