// Data Types - 7 total
// ======================
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator(typeof variable) (typeof value)

// String
const text = "some text";

// Number
const num = 45;

// Boolean
let value1 = true;
let value2 = true;

// Null
const result = null;

// Undefined
let name;

// Symbol(ES6)

console.log(text);
console.log(typeof text);
console.log(typeof true);
console.log(typeof num);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof null);
console.log(typeof name);
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");

// Reference vs Value

// when assigning primitive data type value to a variable any changes are made directly to that value,without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will effect all the references

const number = 1;
let number2 = number;
number2 = 7;

console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: "bob" };
// let person2 = person;
let person2 = { ...person };
person2.name = "susy";

console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);
