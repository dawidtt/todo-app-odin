import { generateAllTodos, todosArr } from "./all-todos-dom";

export { deleteTodo };

function deleteTodo(e) {
  const deleteButtonPosition = e.currentTarget.getAttribute("position");
  todosArr.splice(deleteButtonPosition, 1);
  const mainPath = document.querySelector("main");
  mainPath.innerHTML = "";
  generateAllTodos(todosArr);
}
