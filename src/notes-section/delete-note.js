import { generateAllTodos } from "../all-todos-section/all-todos-dom";
import { todosArray } from "../todo-container/todo-logic";
import "./delete-note.css";
import { renderNotesContainer } from "./notes-dom";
import { notesArray } from "./notes-logic";

export { deleteNote };

function deleteNote(e) {
  const deleteButtonPosition =
    e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute(
      "position"
    );
  const mainPath = document.querySelector("main");

  const newDialog = document.createElement("dialog");
  newDialog.classList.add("delete-confirm");
  newDialog.innerHTML = `
  <div id="confirm-text">
    <h4>Delete Note</h4>
    <p>
      Are you sure you want to delete this note? This action cannot be undone
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
  deleteConfirmBtn.addEventListener("click", () => {
    e.preventDefault();
    notesArray.splice(deleteButtonPosition, 1);

    newDialog.close();
    mainPath.removeChild(newDialog);
    mainPath.innerHTML = "";
    generateAllTodos(todosArray);
  });

  // mainPath.innerHTML = "";
  // generateAllnotes(notesArray);
}
