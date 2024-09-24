import { openTodo } from "./expand-todo";
import "./complete.css";

export { markComplete };

function markComplete(e) {
  if (!e.target.checked) {
    const completeContainer = document.querySelector(` .completed-container`);
    e.target.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.lastChild
    );
    e.currentTarget.nextSibling.classList.remove("completed");
  } else {
    const currentTodoContainer = e.target.parentNode.parentNode;
    const completeContainer = document.createElement("div");
    if (currentTodoContainer.classList.contains("open")) {
      const positionNum = currentTodoContainer.getAttribute("position");
      openTodo(positionNum);
    }

    completeContainer.classList.add("completed-container");
    e.currentTarget.nextSibling.classList.add("completed");

    currentTodoContainer.appendChild(completeContainer);
  }
}
