// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementByClassName('classname')

const listItems = document.getElementsByClassName("special");
const listItems2 = [...listItems];
console.log(listItems);
console.log(listItems2);

listItems[1].style.color = "blue";
