import "./project-dom.css";
import { markComplete } from "../todo-container/complete.js";
import { generateTodoContainer } from "../todo-container/generate-todo-dom.js";
import { todosArray } from "../todo-container/todo-logic.js";
import { projects } from "./project-logic";
import { switchTabs } from "../switch-tabs.js";
import { renderNotesContainer } from "../notes-section/notes-dom.js";
import { openModal } from "../all-todos-section/create-todo-modal.js";
import { openProjectModal } from "./create-project-modal.js";
import { deleteProject } from "./delete-project.js";
import { openEditProject } from "./edit-project.js";
export { generateMyProjects };
export * from "./project-dom.js";
function generateMyProjects() {
  const myPojectsPath = document.querySelector("#projects-container-top");
  const projectCreateBtn = document.querySelector(
    "#projects-container-bottom button"
  );
  projectCreateBtn.addEventListener("click", openProjectModal);
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
  console.log("dziala");
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
    console.log(todosArray);
    if (todosArray[i].project === project.projectName) {
      const todoContainer = generateTodoContainer(todosArray[i], i);
      todosContainer.appendChild(todoContainer);
    }
  }
  console.log(todosContainer);

  console.log(projectHeading);

  const bottomWrapper = document.createElement("div");
  bottomWrapper.classList.add("all-bottom-wrapper");
  const leftBottomBtns = document.createElement("div");
  leftBottomBtns.classList.add("left-bottom-project-btns");

  if (project.projectName !== "General") {
    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.classList.add("delete-project");
    deleteProjectBtn.textContent = "Delete Project";
    deleteProjectBtn.addEventListener("click", () => {
      deleteProject(project);
    });
    const editProject = document.createElement("button");
    editProject.classList.add("edit-project");
    editProject.textContent = "Edit Project";
    editProject.addEventListener("click", openEditProject);
    leftBottomBtns.appendChild(deleteProjectBtn);
    leftBottomBtns.appendChild(editProject);
  }

  const createTodo = document.createElement("button");
  createTodo.textContent = "Create ToDo";
  createTodo.classList.add("create-todo");
  createTodo.addEventListener("click", openModal);
  bottomWrapper.appendChild(leftBottomBtns);
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
