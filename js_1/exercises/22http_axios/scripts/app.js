const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

async function fetchPosts() {
	try {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);

		const listOfPosts = response.data;
		console.log(listOfPosts);

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
	formData.append("userId", userId);

	const response = await axios.post(
		"https://jsonplaceholder.typicode.com/posts",
		post
	);
	console.log(response);
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
		axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
	}
});
