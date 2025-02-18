class PlaceFinder {
	constructor() {
		const addressForm = document.querySelector("form");
		const locateUserBtn = document.getElementById("locate-btn");

		locateUserBtn.addEventListener("click", this.locateUserHandler);
		addressForm.addEventListener("submit", this.findAddressHandler);
	}

	locateUserHandler() {
		if (!navigator.geolocation) {
			alert("Geolocation is not available in this browser.");
			return;
		}
		navigator.geolocation.getCurrentPosition(
			(successResult) => {
				const coordinates = {
					lat: successResult.coords.latitude + Math.random() * 50,
					lng: successResult.coords.longitude + Math.random() * 50,
				};
				console.log(coordinates);
			},
			(error) => {
				alert(
					"Could not locate your position. Please manually enter your address."
				);
			}
		);
	}
	findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
