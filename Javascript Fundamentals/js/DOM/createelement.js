// createElement('element')
// createTextNode("text content")
// element.appendChild("childElement")

// insertBefore("element", "locationn")

// replace

const result = document.querySelector("#result");

// create empty element

const bodyDiv = document.createElement("div");

// create text node

const text = document.createTextNode("HELLO MA MAN IM A DIV");
bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);
document.body.insertBefore(bodyDiv, result);

// result element
const heading = document.createElement("h2");
const headingText = document.createTextNode("heading my boi");
heading.appendChild(headingText);
heading.classList.add("blue");
// result.appendChild(heading);
// result.insertBefore(heading, first);

console.log(result.children);

// create h6

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode("Im a smoll text node");
smallHeading.classList.add("red");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);
console.log(result.children);
