import { generateAllTodos } from "./all-todos-dom";
import "./create-todo-modal.css";
import { createToDo, todosArray } from "./todo-logic";
export { openModal };
import { format } from "date-fns";
function createTodoModal() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("create-todo-dialog");
  dialog.innerHTML = `<form method="dialog">
  <div class="create-todo-title">
    <label for="create-todo-title-input">Title:</label>
    <input type="text" id="create-todo-title-input" required/>
  </div>
  <div class="create-todo-description">
    <label for="create-todo-description-input">Description:</label>
    <textarea id="create-todo-description-input" cols="20" rows="5"></textarea>
  </div>
  <div class="create-todo-date">
    <label for="create-todo-date-input">Due Date:</label>
    <input type="date" id="create-todo-date-input" />
  </div>
  <div class="create-todo-priority">
    <fieldset>
      <legend>Priority</legend>
      <div><input type="radio" id="create-todo-low-priority-input" name="priority" value="Low-priority" checked/>
    <label for="create-todo-low-priority-input">Low-priority</label></div>
    
    <div> <input
      type="radio"
      id="create-todo-medium-priority-input"
      name="priority"
      value="Medium-priority"
    />
    <label for="create-todo-medium-priority-input">Medium-priority</label></div>
    <div><input type="radio" id="create-todo-high-priority-input" name="priority" value="High-priority" />
    <label for="create-todo-high-priority-input">High-priority</label></div>
    
   
    </fieldset>
    
  </div>
  <div id="create-todo-submit-container">
    <button id="create-todo-cancel-btn" formmethod="dialog" value="cancel" >Cancel</button>
    <button id="create-todo-submit-input"  >Create</button>

  </div>
</form>
`;
  return dialog;
}
function setDefaultDateValue() {
  const dateInput = document.querySelector("#create-todo-date-input");
  dateInput.valueAsDate = new Date();
}
function openModal() {
  const mainPath = document.querySelector("main");
  const newDialog = createTodoModal();
  mainPath.appendChild(newDialog);
  handleCreateTodoSubmit(newDialog, mainPath);
  newDialog.showModal();
  setDefaultDateValue();
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
    if (titleValue !== "") {
      e.preventDefault();

      todosArray.push(
        createToDo(
          titleValue,
          descriptionValue,
          format(formattedDueDate, "PPP"),
          priorityValue
        )
      );

      dialog.close();
      main.removeChild(dialog);
      const mainPath = document.querySelector("main");
      mainPath.innerHTML = "";
      generateAllTodos(todosArray);
    }
  });
}
