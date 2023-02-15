// DOM
// similar to css

// select the element or group of elements that you want to affect
// decide the effect we want to apply to the selkection

// many different ways

document.body.style.backgroundColor = "lightblue";
document.body.style.color = "yellow";
document.getElementById("btn").style.color = "red";

// assign to a variable

const element = document.getElementById("element");
// do something

// window object
console.log(window);
// returns a node object or a node list, which is an array like object

const btn = document.getElementById("btn");
const name = btn.nodeName;
const css = btn.style;
console.log(btn);
console.log(name);
console.log(css);
