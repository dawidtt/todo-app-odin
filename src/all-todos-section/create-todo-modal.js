import { generateAllTodos } from "./all-todos-dom";
import "./create-todo-modal.css";
import { createToDo, todosArray } from "../todo-container/todo-logic";
export { openModal };
import { format } from "date-fns";
import { generateTodayTodos } from "../today-section/today-dom";
import {
  general,
  projects,
  createProject,
} from "../projects-modules/project-logic";
function createTodoModal() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("create-todo-dialog");
  dialog.innerHTML = `<form method="dialog">
  <div class="create-todo-title">
    <label for="create-todo-title-input">Title:</label>
    <input type="text" id="create-todo-title-input" required autocomplete="off" placeholder="Title of ToDo"/>
  </div>
  <div class="create-todo-description">
    <label for="create-todo-description-input">Description:</label>
    <textarea id="create-todo-description-input" cols="20" rows="5" placeholder="Write your description..."></textarea>
  </div>
  <div class="create-todo-date">
    <label for="create-todo-date-input">Due Date:</label>
    <input type="date" id="create-todo-date-input" />
  </div>
  <div class="create-todo-priority">
    <fieldset>
      <legend>Priority</legend>
      <div><input type="radio" id="create-todo-low-priority-input" name="priority" value="Low-priority" checked/>
    <label class="label-low-priority" for="create-todo-low-priority-input">Low-priority</label></div>
    
    <div> <input
      type="radio"
      id="create-todo-medium-priority-input"
      name="priority"
      value="Medium-priority"
    />
    <label class="label-medium-priority" for="create-todo-medium-priority-input">Medium-priority</label></div>
    <div><input type="radio" id="create-todo-high-priority-input" name="priority" value="High-priority" />
    <label class="label-high-priority" for="create-todo-high-priority-input">High-priority</label></div>
    
   
    </fieldset>
    
  </div>

    <div class="create-todo-project"><label for="project-select">Project for Todo:</label>

<select name="projects" id="project-select">
  
</select>
    </div>
  <div id="create-todo-submit-container">
    <button id="create-todo-cancel-btn" formmethod="dialog" value="cancel" >Cancel</button>
    <button id="create-todo-submit-input"  >Create</button>

  </div>
</form>
`;
  return dialog;
}
function setDefaultAndMinDateValue() {
  const dateInput = document.querySelector("#create-todo-date-input");
  const today = new Date();
  const dd = format(today, "dd");
  const mm = format(today, "MM");
  const yyyy = format(today, "yyyy");
  const fullToday = `${yyyy}-${mm}-${dd}`;

  dateInput.setAttribute("min", fullToday);

  dateInput.valueAsDate = new Date();
}
function createSelect() {
  const projectsArray = projects.getArray();
  const select = document.querySelector("#project-select");
  for (let i = 0; i < projectsArray.length; i++) {
    const option = document.createElement("option");
    option.value = projectsArray[i].projectName;
    option.setAttribute("position", i);
    option.textContent = projectsArray[i].projectName;
    select.appendChild(option);
  }
}
function openModal() {
  const mainPath = document.querySelector("main");
  const newDialog = createTodoModal();
  mainPath.appendChild(newDialog);
  handleCreateTodoSubmit(newDialog, mainPath);
  newDialog.showModal();
  setDefaultAndMinDateValue();
  createSelect();
}

function handleCreateTodoSubmit(dialog, main) {
  const cancelSubmit = document.querySelector("#create-todo-cancel-btn");
  const createSubmit = document.querySelector("#create-todo-submit-input");
  cancelSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    main.removeChild(dialog);
  });

  createSubmit.addEventListener("click", (e) => {
    const titleValue = document.querySelector("#create-todo-title-input").value;
    const descriptionValue = document.querySelector(
      "#create-todo-description-input"
    ).value;
    const dueDateValue = document.querySelector(
      "#create-todo-date-input"
    ).value;
    const formattedDueDate = new Date(dueDateValue);

    let priorityValue;
    const radios = document.getElementsByName("priority");
    for (const radio of radios) {
      if (radio.checked) {
        priorityValue = radio.value;
      }
    }
    const projectValue = document.querySelector("#project-select").value;
    const projectPosition = document
      .querySelector("#project-select option:checked")
      .getAttribute("position");

    if (titleValue !== "") {
      e.preventDefault();
      const newTodo = createToDo(
        titleValue,
        descriptionValue,
        formattedDueDate,
        priorityValue,
        projectValue
      );
      todosArray.push(newTodo);

      projects.getArray()[projectPosition].addTodoToProject(newTodo);
      dialog.close();
      main.removeChild(dialog);
      const mainPath = document.querySelector("main");
      mainPath.innerHTML = "";
      const allTodoTabPath = document.querySelector("#all-btn");
      const todayTodoTabPath = document.querySelector("#today-btn");

      if (allTodoTabPath.classList.contains("nav-section-checked")) {
        generateAllTodos(todosArray);
      } else if (todayTodoTabPath.classList.contains("nav-section-checked")) {
        generateTodayTodos(todosArray);
      }
    }
  });
}
