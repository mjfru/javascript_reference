const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequest(method, url) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		//! GET
		xhr.open(method, url);
		xhr.responseType = "json";

		xhr.onload = function () {
			resolve(xhr.response);
			// console.log(xhr.response);
			// const listOfPosts = JSON.parse(xhr.response);
		};

		xhr.send();
	});
	return promise;
}

async function fetchPosts() {
	const responseData = await sendHttpRequest(
		"GET",
		"https://jsonplaceholder.typicode.com/posts"
	);

	const listOfPosts = responseData;
	console.log(listOfPosts);

	for (const post of listOfPosts) {
		const postElement = document.importNode(postTemplate.content, true);
		postElement.querySelector("h2").textContent = post.title.toUpperCase();
		postElement.querySelector("p").textContent = post.body;
		listElement.append(postElement);
	}
}

fetchPosts();