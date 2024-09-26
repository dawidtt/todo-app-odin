import { markComplete } from "../todo-container/complete.js";
import { generateTodoContainer } from "../todo-container/generate-todo-dom.js";
import { todosArray } from "../todo-container/todo-logic.js";
import { projects } from "./project-logic";
export * from "./project-dom.js";
function generateMyProjects() {
  const myPojectsPath = document.querySelector("#projects-container-top");
  for (let i = 0; i < projects.getArray().length; i++) {
    const buttonProject = document.createElement("button");
    buttonProject.addEventListener("click", () => {
      showSpecificProject(projects.getArray()[i]);
    });
    buttonProject.textContent = projects.getArray()[i].projectName;
    myPojectsPath.appendChild(buttonProject);
  }
}
generateMyProjects();

function showSpecificProject(project) {
  const projectHeadingText = project.projectName;
  // const todosArray = project.getTodosArray();
  const allWraperPath = document.querySelector(".all-wrapper");
  allWraperPath.innerHTML = "";
  const projectHeading = document.createElement("h2");
  projectHeading.textContent = projectHeadingText;
  const todosContainer = document.createElement("div");
  todosContainer.classList.add("todos-container");
  for (let i = 0; i < todosArray.length; i++) {
    if (todosArray[i].project === project.projectName) {
      const todoContainer = generateTodoContainer(todosArray[i], i);
      todosContainer.appendChild(todoContainer);
    }
  }

  allWraperPath.appendChild(projectHeading);
  allWraperPath.appendChild(todosContainer);
  const todosContainerArray = Array.from(
    document.querySelectorAll(".todo-container")
  );
  for (let i = 0; i < todosContainerArray.length; i++) {
    const currentPosition = todosContainerArray[i].getAttribute("position");
    if (todosArray[currentPosition].completed) markComplete(currentPosition);
  }
}
