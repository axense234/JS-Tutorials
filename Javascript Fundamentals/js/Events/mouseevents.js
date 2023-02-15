// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("You clicked me");
});

btn.addEventListener("mousedown", function () {
  console.log("Down");
});

btn.addEventListener("mouseup", function () {
  console.log("Up");
});

heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});

heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
