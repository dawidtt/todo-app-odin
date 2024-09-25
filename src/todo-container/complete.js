import { expandTodo } from "./expand-todo";
import "./complete.css";
import { todosArray } from "./todo-logic";

export { markComplete };

function markComplete(position) {
  const completeContainer = document.querySelector(
    `.todo-container[position="${position}"] .completed-container`
  );
  const currentTodoContainer = document.querySelector(
    `.todo-container[position="${position}"]`
  );
  const currentHeading = document.querySelector(
    `.todo-container[position="${position}"] .left-todo-container h4`
  );
  const input = document.querySelector(
    `.todo-container[position="${position}"] input[type="checkbox"]`
  );
  if (!input.checked) {
    currentTodoContainer.removeChild(completeContainer);
    currentHeading.classList.remove("completed");
    todosArray[position].completed = false;
  } else {
    const completeContainer = document.createElement("div");
    if (currentTodoContainer.classList.contains("open")) {
      expandTodo(position);
    }
    todosArray[position].completed = true;
    completeContainer.classList.add("completed-container");
    currentHeading.classList.add("completed");

    currentTodoContainer.appendChild(completeContainer);
  }
}
