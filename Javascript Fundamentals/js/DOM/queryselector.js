// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// querySelector('any css') -selects single
// querySelector('any css) -selects all

const result = document.querySelector("#result");
result.style.backgroundColor = "lightblue";

const firstli = document.querySelector(".special");
console.log(firstli.innerText);

const lastli = document.querySelector("li:last-child");
console.log(lastli);

const list = document.querySelectorAll(".special");
console.log(list);

list.forEach(function (li) {
  console.log(`List Item: ${li.innerText}`);
  li.style.color = "yellow";
});
