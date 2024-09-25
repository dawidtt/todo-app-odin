import "./edit-note-modal.css";
import { addNewNote, editNoteObject, notesArray } from "./notes-logic";
import { renderNotesContainer } from "./notes-dom";
import { todosArray } from "../todo-container/todo-logic";
import { generateAllTodos } from "../all-todos-section/all-todos-dom";
export { openNoteEditModal };

function editNoteModal() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("edit-note-dialog");
  dialog.innerHTML = `<form method="dialog">
  <div class="edit-note-title">
    <label for="edit-note-title-input">Title:</label>
    <input type="text" id="edit-note-title-input" required autocomplete="off" placeholder="Title of note"/>
  </div>
  <div class="edit-note-description">
    <label for="edit-note-description-input">Description:</label>
    <textarea id="edit-note-description-input" cols="20" rows="5" placeholder="Write your description..."></textarea>
  </div>
  
    
  </div>
  <div id="edit-note-submit-container">
    <button id="edit-note-cancel-btn" formmethod="dialog" value="cancel" >Cancel</button>
    <button id="edit-note-submit-input"  >edit</button>

  </div>
</form>
`;
  return dialog;
}

function openNoteEditModal(position) {
  const mainPath = document.querySelector("main");
  const newDialog = editNoteModal();

  mainPath.appendChild(newDialog);
  handleeditnoteSubmit(newDialog, mainPath, position);
  newDialog.showModal();
  const titleInput = document.querySelector("#edit-note-title-input");
  const descriptionInput = document.querySelector(
    "#edit-note-description-input"
  );
  titleInput.value = notesArray[position].title;
  descriptionInput.value = notesArray[position].description;
}
function handleeditnoteSubmit(dialog, main, position) {
  const cancelSubmit = document.querySelector("#edit-note-cancel-btn");
  const editSubmit = document.querySelector("#edit-note-submit-input");
  cancelSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    main.removeChild(dialog);
  });

  editSubmit.addEventListener("click", (e) => {
    const titleValue = document.querySelector("#edit-note-title-input").value;
    const descriptionValue = document.querySelector(
      "#edit-note-description-input"
    ).value;

    if (titleValue !== "") {
      e.preventDefault();

      notesArray[position].title = titleValue;
      notesArray[position].description = descriptionValue;

      dialog.close();
      main.removeChild(dialog);
      const mainPath = document.querySelector("main");
      mainPath.innerHTML = "";
      generateAllTodos(todosArray);
    }
  });
}
