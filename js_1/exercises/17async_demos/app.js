const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
	console.log("Clicked!");
	navigator.geolocation.getCurrentPosition(
		(positionData) => {
			setTimeout(() => {
				console.log(positionData);
			}, 2000);
		},
		(error) => {
			console.log(error);
		}
	);
	setTimeout(() => {
		console.log("Timer done!");
	}, 0);
	console.log("Getting position....");
}

button.addEventListener("click", trackUserHandler);

// let result = 0;

// for (let i = 0; i < 10000000; i++) {
//   result = result + i;
// }

// console.log(result);
