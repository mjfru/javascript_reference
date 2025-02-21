//! Using Cookies
// Gives access to all cookies stored, not just one
// console.log(document.cookie);

const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");

storeButton.addEventListener("click", () => {
	const userId = "u123";
	const user = { name: "Matt", age: 34 };
	// Adds a new entry to the cookie, does not override
	// We can also configure settings for cookies here too (max-age, 50 seconds)
	document.cookie = `uid=${userId}; max-age=360`;
	document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveButton.addEventListener("click", () => {
	console.log(document.cookie);
	// To get specific information from a cookie:
	const cookieData = document.cookie.split(";");
	const data = cookieData.map((indexOfArray) => {
		return indexOfArray.trim();
	});
	console.log(data[1].split("=")[1]);
  // console.log(data.includes(''))
});

// More complicated but they give us more options, including expiration dates.
