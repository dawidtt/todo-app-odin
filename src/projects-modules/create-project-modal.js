import "./create-project-modal.css";
import { projects, createProjectsArray, createProject } from "./project-logic";
import { todosArray } from "../todo-container/todo-logic";
import { generateAllTodos } from "../all-todos-section/all-todos-dom";
import { generateMyProjects } from "./project-dom";
import {
  saveProjectsInLocalStorage,
  saveTodosInLocalStorage,
} from "../local-storage/local-storage";
export { openProjectModal };

function createProjectModal() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("create-project-dialog");
  dialog.innerHTML = `<form method="dialog">
  <div class="create-project-title">
    <label for="create-project-title-input">Title:</label>
    <input type="text" id="create-project-title-input" required autocomplete="off" placeholder="Title of project"/>
  </div>
 
  
    
  </div>
  <div id="create-project-submit-container">
    <button id="create-project-cancel-btn" formmethod="dialog" value="cancel" >Cancel</button>
    <button id="create-project-submit-input"  >Create</button>

  </div>
</form>
`;
  return dialog;
}

function openProjectModal() {
  const mainPath = document.querySelector("main");

  const newDialog = createProjectModal();
  mainPath.appendChild(newDialog);
  handleCreateProjectSubmit(newDialog, mainPath);
  newDialog.showModal();
}
function handleCreateProjectSubmit(dialog, main) {
  const cancelSubmit = document.querySelector("#create-project-cancel-btn");
  const createSubmit = document.querySelector("#create-project-submit-input");
  cancelSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    main.removeChild(dialog);
  });

  createSubmit.addEventListener("click", (e) => {
    const titleValue = document.querySelector(
      "#create-project-title-input"
    ).value;

    if (titleValue !== "") {
      e.preventDefault();

      projects.addProject(createProject(titleValue));
      saveProjectsInLocalStorage();
      saveTodosInLocalStorage();

      dialog.close();
      main.removeChild(dialog);
      const mainPath = document.querySelector("main");
      const projectsPath = document.querySelector("#projects-container-top");
      while (projectsPath.childNodes.length > 1) {
        projectsPath.removeChild(projectsPath.lastChild);
      }
      generateMyProjects();
    }
    const projectBtns = document.querySelectorAll(
      "#projects-container-top button"
    );
    const projectBtnsArray = Array.from(projectBtns);
    for (const projectBtn of projectBtnsArray) {
      if (projectBtn.textContent === titleValue) projectBtn.click();
    }
  });
}
