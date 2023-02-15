// Select the element or group of elements that we want
// Decide the effect we want to apply to the section

// getElementyByTagName('tagname')
// node-list = array-like object
// index, length property but not array methods

const headings = document.getElementsByTagName("h2");
// console.log(headings);
headings[0].style.color = "red";

const items = document.getElementsByTagName("li");

// items.array.forEach(function (li) {
//   console.log(li.innerText);
// });

items[3].style.color = "orange";
const betterItems = [...items];

betterItems.forEach(function (li) {
  // console.log(li.innerText);
});

console.log(items);
console.log(betterItems);
