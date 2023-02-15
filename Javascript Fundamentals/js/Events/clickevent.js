// select element
// addEventListener()
// what event, what to do

const button1 = document.querySelector(".btn");
const button2 = document.querySelector(".btn2");
const heading = document.querySelector("h2");

function changeColors() {
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

button1.addEventListener("click", function () {
  if (!heading.classList.contains("red")) {
    heading.classList.add("red");
  } else if (heading.classList.contains("red")) {
    heading.classList.remove("red");
  }
  console.log("You clicked me!");
});

button2.addEventListener("click", changeColors);
