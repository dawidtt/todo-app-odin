import "./edit-project.css";
import { projects, createProjectsArray } from "./project-logic";
import { todosArray } from "../todo-container/todo-logic";
import { generateAllTodos } from "../all-todos-section/all-todos-dom";
import { generateMyProjects } from "./project-dom";
export { openEditProject };

function editProjectModal() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("edit-project-dialog");
  dialog.innerHTML = `<form method="dialog">
  <div class="edit-project-title">
    <label for="edit-project-title-input">Title:</label>
    <input type="text" id="edit-project-title-input" required autocomplete="off" placeholder="Title of project"/>
  </div>
 
  
    
  </div>
  <div id="edit-project-submit-container">
    <button id="edit-project-cancel-btn" formmethod="dialog" value="cancel" >Cancel</button>
    <button id="edit-project-submit-input"  >Edit</button>

  </div>
</form>
`;
  return dialog;
}

function openEditProject() {
  const mainPath = document.querySelector("main");

  const newDialog = editProjectModal();
  mainPath.appendChild(newDialog);

  handleEditProjectSubmit(newDialog, mainPath);
  newDialog.showModal();
}
function handleEditProjectSubmit(dialog, main) {
  const currentProjectsNodeList = document.querySelectorAll(
    "#projects-container-top button"
  );
  const currentProjectsArray = Array.from(currentProjectsNodeList);
  let currentProjectName = "";
  for (const project of currentProjectsArray) {
    if (project.classList.contains("nav-section-checked")) {
      currentProjectName = project.textContent;
    }
  }
  const inputPath = document.querySelector("#edit-project-title-input");
  inputPath.value = currentProjectName;
  const cancelSubmit = document.querySelector("#edit-project-cancel-btn");
  const editSubmit = document.querySelector("#edit-project-submit-input");
  cancelSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    main.removeChild(dialog);
  });

  editSubmit.addEventListener("click", (e) => {
    const titleValue = document.querySelector(
      "#edit-project-title-input"
    ).value;

    if (titleValue !== "") {
      e.preventDefault();

      const projectsArray = projects.getArray();
      for (const project of projectsArray) {
        if (project.projectName === currentProjectName) {
          projects.changeName(project, titleValue);
        }
      }
      for (let i = 0; i < todosArray.length; i++) {
        if (todosArray[i].project === currentProjectName) {
          todosArray[i].project = titleValue;
        }
      }

      dialog.close();
      main.removeChild(dialog);
      const mainPath = document.querySelector("main");
      const projectsPath = document.querySelector("#projects-container-top");
      while (projectsPath.childNodes.length > 1) {
        projectsPath.removeChild(projectsPath.lastChild);
      }
      generateMyProjects();
      const projectBtns = document.querySelectorAll(
        "#projects-container-top button"
      );
      const projectBtnsArray = Array.from(projectBtns);
      for (const projectBtn of projectBtnsArray) {
        if (projectBtn.textContent === titleValue) projectBtn.click();
      }
    }
  });
}
