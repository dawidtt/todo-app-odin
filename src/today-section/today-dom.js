import "./today-todos.css";
import { todosArray } from "../todo-container/todo-logic.js";
import * as notesDom from "../notes-section/notes-dom.js";
import { format } from "date-fns";
import { openModal } from "../all-todos-section/create-todo-modal.js";

import { generateTodoContainer } from "../todo-container/generate-todo-dom.js";
import { markComplete } from "../todo-container/complete.js";
export { generateTodayTodos };

function generateTodayTodos(todosArray) {
  const mainPath = document.querySelector("main");

  const allWrapper = document.createElement("div");
  allWrapper.classList.add("all-wrapper");
  const allHeading = document.createElement("h2");
  allHeading.textContent = "All ToDos";
  allWrapper.appendChild(allHeading);
  const todosContainer = document.createElement("div");
  todosContainer.classList.add("todos-container");

  for (let i = 0; i < todosArray.length; i++) {
    if (format(todosArray[i].dueDate, "PPP") === format(new Date(), "PPP")) {
      const todoContainer = generateTodoContainer(todosArray[i], i);
      todosContainer.appendChild(todoContainer);
    }
  }
  allWrapper.appendChild(todosContainer);
  const bottomWrapper = document.createElement("div");
  bottomWrapper.classList.add("all-bottom-wrapper");
  const createTodo = document.createElement("button");
  createTodo.textContent = "Create ToDo";
  createTodo.classList.add("create-todo");
  createTodo.addEventListener("click", openModal);

  bottomWrapper.appendChild(createTodo);
  mainPath.appendChild(allWrapper);
  mainPath.appendChild(bottomWrapper);
  const todosContainerArray = Array.from(
    document.querySelectorAll(".todo-container")
  );
  for (let i = 0; i < todosContainerArray.length; i++) {
    const currentPosition = todosContainerArray[i].getAttribute("position");
    if (todosArray[currentPosition].completed) markComplete(currentPosition);
  }
  notesDom.renderNotesContainer();
}
