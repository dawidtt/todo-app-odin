import { generateAllTodos } from "./all-todos-dom";
import { todosArray } from "./todo-logic";

export { deleteTodo };

function deleteTodo(e) {
  const deleteButtonPosition = e.currentTarget.getAttribute("position");
  todosArray.splice(deleteButtonPosition, 1);
  const mainPath = document.querySelector("main");
  mainPath.innerHTML = "";
  generateAllTodos(todosArray);
}
