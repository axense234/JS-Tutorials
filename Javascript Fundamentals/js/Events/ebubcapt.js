// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches tharget

const container = document.querySelector(".container");
const lists = document.querySelector(".list-items");

function showBubbling(e) {
  console.log(`currentTarget`, e.currentTarget);
  // console.log(`target`, e.target);
  // if (e.target.classList.contains("link")) {
  //   console.log("you clicked on the link");
  // }
}

function stopPropagation(e) {
  console.log("you clicked on a list");
  e.stopPropagation();
}

lists.addEventListener("click", showBubbling, { capture: true });
container.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });
