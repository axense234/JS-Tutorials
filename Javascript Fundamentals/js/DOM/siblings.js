// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector(".first");
console.log(first);
const second = (first.nextSibling.nextSibling.style.color = "red");
const last = document.querySelector(".last");
console.log(second);
const third = last.previousSibling.previousSibling;
console.log(third);

// null
console.log(last.nextSibling.nextSibling);

// previousElementSibling
// nextElementSibling
// returns the next element without white space

first.nextElementSibling.style.color = "red";
