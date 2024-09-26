import { generateAllTodos } from "../all-todos-section/all-todos-dom";
import { todosArray } from "./todo-logic";
import { format } from "date-fns";
import "./edit-todo-modal.css";
export { editTodo };

function editTodo(e) {
  const editButtonPosition = e.currentTarget.getAttribute("position");

  openEditModal(editButtonPosition);
  const todoObject = todosArray[editButtonPosition];
  const mainPath = document.querySelector("main");
  const { title, description, dueDate, priority } = todoObject;

  const titleInput = document.querySelector("#edit-todo-title-input");
  titleInput.value = title;
  const descriptionInput = document.querySelector(
    "#edit-todo-description-input"
  );
  descriptionInput.value = description;
  console.log(descriptionInput.value);

  const lowPriorityRadio = document.querySelector(
    "#edit-todo-low-priority-input"
  );
  const mediumPriorityRadio = document.querySelector(
    "#edit-todo-medium-priority-input"
  );
  const highPriorityRadio = document.querySelector(
    "#edit-todo-high-priority-input"
  );
  console.log(priority);
  if (priority === "Low-priority") lowPriorityRadio.checked = true;
  else if (priority === "Medium-priority") mediumPriorityRadio.checked = true;
  else if (priority === "High-priority") highPriorityRadio.checked = true;
}

function setCurrentAndMinDateValue() {
  const dateInput = document.querySelector("#edit-todo-date-input");
  const today = new Date();
  const dd = format(today, "dd");
  const mm = format(today, "MM");
  const yyyy = format(today, "yyyy");
  const fullToday = `${yyyy}-${mm}-${dd}`;

  console.log(fullToday);
  dateInput.setAttribute("min", fullToday);

  dateInput.valueAsDate = new Date();
}

function openEditModal(position) {
  const mainPath = document.querySelector("main");
  const newDialog = createEditTodoModal();
  mainPath.appendChild(newDialog);
  handleEditTodoSubmit(newDialog, mainPath, position);
  newDialog.showModal();
  setCurrentAndMinDateValue();
}
function handleEditTodoSubmit(dialog, main, position) {
  const cancelSubmit = document.querySelector("#edit-todo-cancel-btn");
  const editSubmit = document.querySelector("#edit-todo-submit-input");
  cancelSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    main.removeChild(dialog);
  });

  editSubmit.addEventListener("click", (e) => {
    const titleValue = document.querySelector("#edit-todo-title-input").value;
    const descriptionValue = document.querySelector(
      "#edit-todo-description-input"
    ).value;
    const dueDateValue = document.querySelector("#edit-todo-date-input").value;
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

      todosArray[position].title = titleValue;
      todosArray[position].description = descriptionValue;
      todosArray[position].dueDate = formattedDueDate;
      todosArray[position].priority = priorityValue;

      dialog.close();
      main.removeChild(dialog);
      const mainPath = document.querySelector("main");
      mainPath.innerHTML = "";
      generateAllTodos(todosArray);
    }
  });
}

function createEditTodoModal() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("edit-todo-dialog");
  dialog.innerHTML = `<form method="dialog">
  <div class="edit-todo-title">
    <label for="edit-todo-title-input">Title:</label>
    <input type="text" id="edit-todo-title-input" required autocomplete="off" placeholder="Title of ToDo"/>
  </div>
  <div class="edit-todo-description">
    <label for="edit-todo-description-input">Description:</label>
    <textarea id="edit-todo-description-input" cols="20" rows="5" placeholder="Write your description..."></textarea>
  </div>
  <div class="edit-todo-date">
    <label for="edit-todo-date-input">Due Date:</label>
    <input type="date" id="edit-todo-date-input" />
  </div>
  <div class="edit-todo-priority">
    <fieldset>
      <legend>Priority</legend>
      <div><input type="radio" id="edit-todo-low-priority-input" name="priority" value="Low-priority" checked/>
    <label class="label-low-priority" for="edit-todo-low-priority-input">Low-priority</label></div>
    
    <div> <input
      type="radio"
      id="edit-todo-medium-priority-input"
      name="priority"
      value="Medium-priority"
    />
    <label class="label-medium-priority" for="edit-todo-medium-priority-input">Medium-priority</label></div>
    <div><input type="radio" id="edit-todo-high-priority-input" name="priority" value="High-priority" />
    <label class="label-high-priority" for="edit-todo-high-priority-input">High-priority</label></div>
    
   
    </fieldset>
    
  </div>
  <div id="edit-todo-submit-container">
    <button id="edit-todo-cancel-btn" formmethod="dialog" value="cancel" >Cancel</button>
    <button id="edit-todo-submit-input"  >Edit</button>

  </div>
</form>
`;
  return dialog;
}
