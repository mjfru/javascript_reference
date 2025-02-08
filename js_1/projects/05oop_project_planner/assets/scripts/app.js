import { ProjectList } from "./app/ProjectList.js";

class App {
	static init() {
		const activeProjectsList = new ProjectList("active");
		const finishedProjectsList = new ProjectList("finished");
		activeProjectsList.setSwitchHandlerFunction(
			finishedProjectsList.addProject.bind(finishedProjectsList)
		);
		finishedProjectsList.setSwitchHandlerFunction(
			activeProjectsList.addProject.bind(activeProjectsList)
		);

		//! Dynamically creating scrips...in JS!
		// const someScript = document.createElement('script');
		// someScript.textContent = "alert('Hi there');";
		// document.head.append(someScript);
		// this.startAnalytics();

		//! Timing it (once):
		// setTimeout(this.startAnalytics, 3000);
		// const timerId = setTimeout(this.startAnalytics, 3000);

		//! Stopping a timer with an event:
		// document
		// 	.getElementById("stop-analytics-button")
		// 	.addEventListener("click", () => {
		// 		clearTimeout(timerId);
		// 	});

		//! Setting it as an event listener:
		// document
		// 	.getElementById("start-analytics-button")
		// 	.addEventListener("click", this.startAnalytics);
	}

	static startAnalytics() {
		const analyticsScript = document.createElement("script");
		analyticsScript.src = "assets/scripts/utility/Analytics.js";
		analyticsScript.defer = true;
		document.head.append(analyticsScript);
	}
}

App.init();
