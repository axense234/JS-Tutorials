// Numbers
// Loosely Typed = don't declare type
// =======================================

/*
const number = 34;
let pants = 3.4328398283992382983;
pants = "horny trousers";
const number2 = 2.456;
const number3 = "2.456";

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(number);
console.log(number2);
console.log(number3);

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
*/

// Numbers
// +=, -=, /=, *=, ++, --, %
// Modules (%) operator returns the remainder after integer division
// =======================================

let number = 40;
number += 5;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;

number++;
number--;

number *= 10;
number /= 10;

const slices = 10;
const children = 4;
const amount = slices / children;
const amount2 = slices % children;

const random = 4 + 6 + 10 * 10;
const random2 = (4 + 6 + 10) * 10;

console.log(number);
console.log(amount);
console.log(amount2);

console.log(random);
console.log(random2);
