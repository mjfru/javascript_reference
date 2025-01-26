import { ProjectItem } from "./ProjectItem.js";
import { DOMHelper } from "../utility/DOMHelper.js";

export class ProjectList {
	projects = [];

	constructor(type) {
		this.type = type;

		const projectItems = document.querySelectorAll(`#${type}-projects li`);
		for (const projectItem of projectItems) {
			this.projects.push(
				new ProjectItem(
					projectItem.id,
					this.switchProject.bind(this),
					this.type
				)
			);
		}
		console.log(this.projects);
	}
	setSwitchHandlerFunction(switchHandlerFunction) {
		this.switchHandler = switchHandlerFunction;
	}

	addProject(project) {
		this.projects.push(project);
		DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
		console.log(this);
		project.update(this.switchProject.bind(this), this.type);
	}

	switchProject(projectId) {
		// const projectIndex = this.projects.findIndex(
		// 	(project) => project.id === projectId
		// );
		// this.projects.splice(projectIndex, 1);
		this.switchHandler(
			this.projects.find((project) => project.id === projectId)
		);
		this.projects = this.projects.filter((project) => project.id !== projectId);
	}
}
