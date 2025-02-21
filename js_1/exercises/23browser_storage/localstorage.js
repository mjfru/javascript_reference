//! Local & Session Storage:

const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");

// Our temporary data, a fake userId:
const userId = "u123";

// A more complex example:
const user = {
	name: "Matt",
	age: 34,
	hobbies: ["Soccer", "Coding", "Gaming"],
};

// Simply storing this in local storage:
// localStorage.setItem("uid", userId);
// This is now in browser storage! (DevTools -> Application), but let's make it interactive instead...

storeButton.addEventListener("click", () => {
	//! Local:
	// localStorage.setItem("uid", userId);
	//! Session:
	sessionStorage.setItem("uid", userId);
	// Since setItem automatically converts 'user' to a string, it makes it unreadable, so let's utilize JSON to fix that.
	localStorage.setItem("user", JSON.stringify(user));
});

retrieveButton.addEventListener("click", () => {
	//! Local Example:
	// const extractedId = localStorage.getItem("uid");
	//! Session Example:
	const extractedId = sessionStorage.getItem("uid", userId);
	const extractedUser = JSON.parse(localStorage.getItem("user"));
	console.log(extractedUser);

	if (extractedId) {
		console.log(`The userID is ${extractedId}`);
	} else {
		console.log("No userID found.");
	}
});
