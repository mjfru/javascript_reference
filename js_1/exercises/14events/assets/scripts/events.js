const button = document.querySelector("button");

// button.onclick = function() {

// }

const buttonClickHandler = (e) => {
	e.target.disabled = true;
	// alert("Button was clicked!");
	console.log(e);
};

// button.onclick = buttonClickHandler;

// button.addEventListener("click", buttonClickHandler);

//? Removing:
// setTimeout(() => {
// 	button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// buttons.forEach(button => {
//   button.addEventListener('click', buttonClickHandler);
// })

// window.addEventListener('scroll', e => {
//   console.log(e);
// })

//! Working with preventDefault()
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(e);
});

//! Bubbling & Capturing Demo:
const div = document.querySelector("div");
div.addEventListener("click", (e) => {
	console.log("Div clicked!");
	console.log(e);
	//? True, as the third argument indicates that this event should be part of the capturing phase
});

button.addEventListener("click", function(e) {
	//? Default behavior executes but any other listeners will not be triggered
	e.stopPropagation();
	console.log("Button clicked!");
	console.log(e);
  console.log(this);
});

//! Event Delegation

//? This is ok, but it's a bit cumbersome.
const listItems = document.querySelectorAll("li");

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', e => {
//     e.target.classList.toggle('highlight');
//   })
// })

//? Let's take advantage of event delegation instead
const list = document.querySelector("ul");
// list.addEventListener("click", (e) => {
// 	e.target.classList.toggle("highlight");
// });

//* This approach works just like above, but it becomes a little complicated when working with nested items (an h2 inside of a li, for example)

list.addEventListener("click", (e) => {
	e.target.closest("li").classList.toggle("highlight");
	//! Triggering DOM Elements Programmatically - One event triggers another
	//* This skips the event listener that we've programmed above.
	form.submit();
});
