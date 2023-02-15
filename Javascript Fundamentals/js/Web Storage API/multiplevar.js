// JSON.stringify(),JSON.parse()

const friends = ["john", "bobo", "taco"];

localStorage.setItem("friends", JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[0]);

let fruits = [];

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}
function addFruit(fruit) {
  fruits.push(fruit);
}

console.log(fruits);
addFruit("banana");
addFruit("apple");
addFruit("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
