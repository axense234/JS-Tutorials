// className
// classList

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;
console.log(classValue);

second.className = "colors text";

third.classList.add("colors", "emptyclass");
third.classList.add("text");

third.classList.remove("colors");

let result = third.classList.contains("colors");
console.log(result);
