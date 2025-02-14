const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (options) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(success) => {
				resolve(success);
			},
			(error) => {
				reject(error);
			},
			options
		);
	});
	return promise;
};

const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Timer Done!");
		}, duration);
	});
	return promise;
};

async function trackUserHandler() {
	// let positionData;
	let posData;
	let timerData;
	try {
		posData = await getPosition();
		timerData = await setTimer(2000);
	} catch (error) {
		console.log(error);
	}
	console.log(timerData, posData);

	// .then((posData) => {
	// 	positionData = posData;
	// 	return setTimer(2000);
	// })
	// .catch((error) => {
	// 	console.log(error);
	// 	return "We continue nonetheless!";
	// })
	// .then((data) => {
	// 	console.log(data, positionData);
	// });
	// setTimer(1000).then(() => {
	// 	console.log("Timer done!");
	// });
	// console.log("Getting position....");
}

button.addEventListener("click", trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then((data) => {
	console.log(data);
});
//* Takes an array of Promises, returns a promise itself with the result of the fastest resolving promise. The data it returns will be whatever finishes first.
getPosition();
setTimer(1000);

Promise.all([getPosition(), setTimer(1000)]).then((data) => {
	console.log(data);
});
//* The combined data of all data in the individual promises passed in.

Promise.allSettled([getPosition(), setTimer(1000)]).then((promiseData) => {
	console.log(promiseData);
});
