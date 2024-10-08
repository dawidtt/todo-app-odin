import { generateAllTodos } from "../all-todos-section/all-todos-dom";
import { todosArray } from "./todo-logic";
import "./delete-todo.css";
import { general } from "../projects-modules/project-logic";
import {
  saveProjectsInLocalStorage,
  saveTodosInLocalStorage,
} from "../local-storage/local-storage";

export { deleteTodo };

function deleteTodo(e) {
  const deleteButtonPosition = e.currentTarget.getAttribute("position");
  const mainPath = document.querySelector("main");

  const newDialog = document.createElement("dialog");
  newDialog.classList.add("delete-confirm");
  newDialog.innerHTML = `
  <div id="confirm-text">
    <h4>Delete Todo</h4>
    <p>
      Are you sure you want to delete this todo? This action cannot be undone
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
    general.deleteTodoFromProject(todosArray[deleteButtonPosition]);
    todosArray.splice(deleteButtonPosition, 1);
    saveTodosInLocalStorage();

    newDialog.close();
    mainPath.removeChild(newDialog);
    mainPath.innerHTML = "";
    generateAllTodos(todosArray);
    saveProjectsInLocalStorage();
    saveTodosInLocalStorage();
  });

  // mainPath.innerHTML = "";
  // generateAllTodos(todosArray);
}
