// Implicit Type Conversion
// =========================
/*
const name = "john";
const lastName = "jordan";
const fullName = name + " " + lastName;
console.log(fullName);

const number = 4;
const number2 = 10;
const result = number + number2;
console.log(result);

const value = name - lastName;
console.log(value);

let number3 = "10";
let number4 = "15";

// 100 lines

number4 = "horny trousers";

const result2 = number4 - number3;
const result3 = number4 + number3;

console.log(result2);
console.log(result3);
*/

const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  value = parseInt(value);
  console.log("Input Value Type");
  console.log(value);
  console.log("Sum of Two Values");
  console.log(randomNumber + value);
});
