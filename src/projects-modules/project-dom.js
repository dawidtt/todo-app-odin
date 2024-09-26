import { projects } from "./project-logic";
export * from "./project-dom.js";
function generateMyProjects() {
  const myPojectsPath = document.querySelector("#projects-container-top");
  for (let i = 0; i < projects.getArray().length; i++) {
    const buttonProject = document.createElement("button");
    buttonProject.textContent = projects.getArray()[i].projectName;
    myPojectsPath.appendChild(buttonProject);
  }
}
generateMyProjects();
