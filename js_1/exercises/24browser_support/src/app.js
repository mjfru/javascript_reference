/* eslint-disable quotes */
const button = document.querySelector("button");
const textParagraph = document.querySelector("p");

button.addEventListener("click", () => {
	const text = textParagraph.textContent;

	//! Feature Detection:
	if (navigator.clipboard) {
		navigator.clipboard
			.writeText(text)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => console.log(error));
	} else {
		alert("Feature not available in this browser, please copy manually.");
	}
});
