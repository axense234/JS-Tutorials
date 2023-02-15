// getAttribute()
// setAttribute()

const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
console.log(classValue);

const links = document.querySelectorAll(".first");
console.log(links);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "click me if u gay";

console.log(last);
