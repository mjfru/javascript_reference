const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Done!");
		}, duration);
	});
	return promise;
};

function trackUserHandler() {
	console.log("Clicked!");
	navigator.geolocation.getCurrentPosition(
		(positionData) => {
			setTimer(2000).then((data) => {
				console.log(data, positionData);
			});
		},
		(error) => {
			console.log(error);
		}
	);
	setTimer(1000).then(() => {
		console.log("Timer done!");
	});
	console.log("Getting position....");
}

button.addEventListener("click", trackUserHandler);