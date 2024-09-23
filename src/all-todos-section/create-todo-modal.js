export { openModal };
function createTodoModal() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("create-todo-dialog");
  dialog.innerHTML = `<form method="dialog">
  <div class="create-todo-title">
    <label for="create-todo-title-input">Title</label>
    <input type="text" id="create-todo-title-input" />
  </div>
  <div class="create-todo-description">
    <label for="create-todo-description-input">Description</label>
    <textarea id="create-todo-description-input" cols="30" rows="10"></textarea>
  </div>
  <div class="create-todo-date">
    <label for="create-todo-date-input">Due Date</label>
    <input type="date" id="create-todo-date-input" />
  </div>
  <div class="create-todo-priority">
    <fieldset>
      <legend>Priority</legend>
      <label for="create-todo-priority-input">Low-priority</label>
    <input type="radio" id="create-todo-priority-input" value="Low-priority" />
    <label for="create-todo-priority-input">Medium-priority</label>
    <input
      type="radio"
      id="create-todo-priority-input"
      value="Medium-priority"
    />
    <label for="create-todo-priority-input">High-priority</label>
    <input type="radio" id="create-todo-priority-input" value="High-priority" />
    </fieldset>
    
  </div>
  <input id="create-todo-submit-input" type="submit" value="Create"/>
</form>
`;
  return dialog;
}
function openModal() {
  const mainPath = document.querySelector("main");
  const newDialog = createTodoModal();
  mainPath.appendChild(newDialog);
  const createSubmit = document.querySelector("#create-todo-submit-input");
  createSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    newDialog.close();
    mainPath.removeChild(newDialog);
  });
  newDialog.showModal();
}
