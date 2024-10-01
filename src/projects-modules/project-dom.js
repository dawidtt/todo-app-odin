import { markComplete } from "../todo-container/complete.js";
import { generateTodoContainer } from "../todo-container/generate-todo-dom.js";
import { todosArray } from "../todo-container/todo-logic.js";
import { projects } from "./project-logic";
import { switchTabs } from "../switch-tabs.js";
import { renderNotesContainer } from "../notes-section/notes-dom.js";
import { openModal } from "../all-todos-section/create-todo-modal.js";
export * from "./project-dom.js";
function generateMyProjects() {
  const myPojectsPath = document.querySelector("#projects-container-top");
  for (let i = 0; i < projects.getArray().length; i++) {
    const buttonProject = document.createElement("button");
    buttonProject.addEventListener("click", switchTabs);

    buttonProject.addEventListener("click", () => {
      showSpecificProject(projects.getArray()[i]);
    });
    buttonProject.addEventListener("click", renderNotesContainer);
    buttonProject.textContent = projects.getArray()[i].projectName;
    myPojectsPath.appendChild(buttonProject);
  }
}
generateMyProjects();

function showSpecificProject(project) {
  const mainPath = document.querySelector("main");
  const allWrapper = document.createElement("div");
  allWrapper.classList.add("all-wrapper");
  const projectHeadingText = project.projectName;
  // const todosArray = project.getTodosArray();

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

  const bottomWrapper = document.createElement("div");
  bottomWrapper.classList.add("all-bottom-wrapper");
  const createTodo = document.createElement("button");
  createTodo.textContent = "Create ToDo";
  createTodo.classList.add("create-todo");
  createTodo.addEventListener("click", openModal);

  bottomWrapper.appendChild(createTodo);
  allWrapper.appendChild(projectHeading);
  allWrapper.appendChild(todosContainer);
  mainPath.appendChild(allWrapper);
  mainPath.appendChild(bottomWrapper);

  const todosContainerArray = Array.from(
    document.querySelectorAll(".todo-container")
  );
  for (let i = 0; i < todosContainerArray.length; i++) {
    const currentPosition = todosContainerArray[i].getAttribute("position");
    if (todosArray[currentPosition].completed) markComplete(currentPosition);
  }
}
