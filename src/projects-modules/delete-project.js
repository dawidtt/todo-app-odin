import { createProject, projects } from "./project-logic";
import { removeTodo } from "../todo-container/todo-logic";
import { generateMyProjects } from "./project-dom";
export { deleteProject };
function deleteProject(project) {
  const mainPath = document.querySelector("main");

  const newDialog = document.createElement("dialog");
  newDialog.classList.add("delete-confirm");
  newDialog.innerHTML = `
  <div id="confirm-text">
    <h4>Delete Note</h4>
    <p>
      Are you sure you want to delete this project and all of its todos? This action cannot be undone
    </p>
  </div>
  <button id="delete-confirm-btn">Delete</button>
  <button id="delete-cancel-btn">Cancel</button>

`;
  mainPath.appendChild(newDialog);
  newDialog.showModal();
  const deleteConfirmBtn = document.querySelector("#delete-confirm-btn");
  const deleteCancelBtn = document.querySelector("#delete-cancel-btn");
  deleteCancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mainPath.removeChild(newDialog);
  });
  deleteConfirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("dziala?");
    console.log(project.getTodosArray());
    console.log(project);
    const allProjectTodos = project.getTodosArray();
    for (const todo of allProjectTodos) {
      removeTodo(todo);
    }
    projects.deleteProject(project);
    const allTodos = document.querySelector("#all-btn");
    allTodos.click();
    const projectsPath = document.querySelector("#projects-container-top");
    while (projectsPath.childNodes.length > 1) {
      projectsPath.removeChild(projectsPath.lastChild);
    }
    generateMyProjects();
  });
}
