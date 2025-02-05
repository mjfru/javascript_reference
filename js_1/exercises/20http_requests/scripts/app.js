const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
	//? The 'newer' way, the .fetch() API
	// fetch(url) -- sends a simple GET request to that URL right of the of the box; no need to promisify it.
	return fetch(url, {
		method: method, // Set to 'GET' by default
		// body: JSON.stringify(data), // Must be in JSON
    body: data,
		// headers: {
		// 	"Content-Type": "application/json", // Tells the server that this request has JSON data
		// },
	})
		.then((response) => {
			//! This if statement is used to handle errors
			if (response.status >= 200 && response.status < 300) {
				//* This does not hold a response that's ready to be used immediately, we need to use .then and modify the response to how we want.
				return response.json();
			} else {
				return response.json().then((errorData) => {
          console.log(errorData);
					throw new Error("Something went wrong on the server...");
				});
			}
		})
		.catch((error) => {
			console.log(error);
			throw new Error("Something went wrong...");
		});

	// const promise = new Promise((resolve, reject) => {

	//? XHR / XML, the 'old' way but still used
	// 	const xhr = new XMLHttpRequest();
	// xhr.setRequestHeader('Content-Type', 'application/json);
	// 	//! GET
	// 	xhr.open(method, url);
	// 	xhr.responseType = "json";
	// 	xhr.onload = function () {
	// 		if (xhr.status >= 200 && xhr.status < 300) {
	// 			resolve(xhr.response);
	// 		} else {
	// 			reject(new Error("Something went wrong!"));
	// 		}
	// 		resolve(xhr.response);
	// 		// console.log(xhr.response);
	// 		// const listOfPosts = JSON.parse(xhr.response);
	// 	};
	// 	//! ERROR HANDLING
	// 	xhr.onerror = function () {
	// 		reject(new Error("Failed to send request!"));
	// 		// console.log(xhr.reponse);
	// 		// console.log(xhr.status);
	// 	};
	// 	xhr.send(JSON.stringify(data));
	// });
	// return promise;
}

async function fetchPosts() {
	try {
		const responseData = await sendHttpRequest(
			"GET",
			//! Change this address to trigger an example error
			"https://jsonplaceholder.typicode.com/posts"
		);

		const listOfPosts = responseData;
		// console.log(listOfPosts);

		for (const post of listOfPosts) {
			const postElement = document.importNode(postTemplate.content, true);
			postElement.querySelector("h2").textContent = post.title.toUpperCase();
			postElement.querySelector("p").textContent = post.body;
			postElement.querySelector("li").id = post.id;
			listElement.append(postElement);
		}
	} catch (error) {
		alert(error.message);
	}
}

//! POST
async function createPost(title, content) {
	const userId = Math.random();
	const post = {
		title: title,
		body: content,
		userId: userId,
	};

  const formData = new FormData(form);
  //! Must match the 'name' in the form in HTML
  // formData.append('title', title);
  // formData.append('body', content);
  formData.append('userId', userId);

	sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", formData);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const enteredTitle = event.currentTarget.querySelector("#title").value;
	const enteredContent = event.currentTarget.querySelector("#content").value;
	createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
	if (event.target.tagName === "BUTTON") {
		// console.log('Button clicked!')
		const postId = event.target.closest("li").id;
		// console.log(postId);
		sendHttpRequest(
			"DELETE",
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		);
	}
});

// fetchPosts();
// createPost("Dummy post", "Testing...");
