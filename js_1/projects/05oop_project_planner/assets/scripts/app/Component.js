export class Component {
	constructor(hostElementId, insertBefore = false) {
		if (hostElementId) {
			this.hostElement = document.getElementById(hostElementId);
		} else {
			this.hostElement = document.body;
		}
		this.insertBefore = insertBefore;
	}
	detach() {
		if (this.element) {
			this.element.remove();
		}
	}

	attach() {
		this.hostElement.insertAdjacentElement(
			this.insertBefore ? "afterbegin" : "beforeend",
			this.element
		);
		// console.log("The tooltip!");
	}
}
