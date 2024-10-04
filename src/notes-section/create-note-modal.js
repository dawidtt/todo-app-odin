import "./create-note-modal.css";
import { addNewNote, createNoteObject, notesArray } from "./notes-logic";
import { renderNotesContainer } from "./notes-dom";
import { todosArray } from "../todo-container/todo-logic";
import { generateAllTodos } from "../all-todos-section/all-todos-dom";
import { saveNotesInLocalStorage } from "../local-storage/local-storage";
export { openNoteModal };

function createNoteModal() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("create-note-dialog");
  dialog.innerHTML = `<form method="dialog">
  <div class="create-note-title">
    <label for="create-note-title-input">Title:</label>
    <input type="text" id="create-note-title-input" required autocomplete="off" placeholder="Title of note"/>
  </div>
  <div class="create-note-description">
    <label for="create-note-description-input">Description:</label>
    <textarea id="create-note-description-input" cols="20" rows="5" placeholder="Write your description..."></textarea>
  </div>
  
    
  </div>
  <div id="create-note-submit-container">
    <button id="create-note-cancel-btn" formmethod="dialog" value="cancel" >Cancel</button>
    <button id="create-note-submit-input"  >Create</button>

  </div>
</form>
`;
  return dialog;
}

function openNoteModal() {
  const mainPath = document.querySelector("main");

  const notesPath = document.querySelector(".notes-wrapper");
  const newDialog = createNoteModal();
  mainPath.appendChild(newDialog);
  handleCreatenoteSubmit(newDialog, mainPath);
  newDialog.showModal();
}
function handleCreatenoteSubmit(dialog, main) {
  const cancelSubmit = document.querySelector("#create-note-cancel-btn");
  const createSubmit = document.querySelector("#create-note-submit-input");
  cancelSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    main.removeChild(dialog);
  });

  createSubmit.addEventListener("click", (e) => {
    const titleValue = document.querySelector("#create-note-title-input").value;
    const descriptionValue = document.querySelector(
      "#create-note-description-input"
    ).value;

    if (titleValue !== "") {
      e.preventDefault();

      addNewNote(createNoteObject(titleValue, descriptionValue));
      saveNotesInLocalStorage(notesArray);

      dialog.close();
      main.removeChild(dialog);
      const mainPath = document.querySelector("main");
      const notesPath = document.querySelector(".notes-wrapper");
      notesPath.innerHTML = "";
      renderNotesContainer();
    }
  });
}
