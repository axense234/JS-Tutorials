// Arrays and for loop

const names = ["John", "Daddy", "Susy", "Burrito", "Taco"];
const lastNames = ["Arbuckle", "O5", "Musy", "Good", "Bad"];

for (let i = 0; i < names.length; i++) {
  message = `Hello my name is ${names[i]} ${lastNames[i]}`;
  console.log(message);
}

const names2 = ["Anna", "Susy", "Bob", "Michael"];
const lastName = "Shakey";
let newArray = [];

// for loop
for (let i = 0; i < names2.length; i++) {
  console.log(`I am ${names2[i]} ${lastName}!`);
  newArray.push(`${names2[i]} ${lastName}`);
}

console.log(newArray);
