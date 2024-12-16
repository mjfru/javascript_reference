const buttons = document.querySelectorAll("button");

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

buttons.forEach(button => {
  button.addEventListener('click', buttonClickHandler);
})

window.addEventListener('scroll', e => {
  console.log(e);
})