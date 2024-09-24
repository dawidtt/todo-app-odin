import "./all-todos.css";
import { todosArray } from "./todo-logic.js";
import * as notesDom from "../notes-section/notes-dom.js";
import * as expandTodo from "./expand-todo.js";
import { markComplete } from "./complete.js";
import { deleteTodo } from "./delete-todo.js";
import { openModal } from "./create-todo-modal.js";
import { editTodo } from "./edit-todo-modal.js";
import { format } from "date-fns";
export { generateAllTodos };

generateAllTodos(todosArray);

function generateAllTodos(todosArray) {
  const mainPath = document.querySelector("main");

  const allWrapper = document.createElement("div");
  allWrapper.classList.add("all-wrapper");
  const allHeading = document.createElement("h2");
  allHeading.textContent = "All ToDos";
  allWrapper.appendChild(allHeading);
  const todosContainer = document.createElement("div");
  todosContainer.classList.add("todos-container");

  for (let i = 0; i < todosArray.length; i++) {
    const { title, description, dueDate, priority } = todosArray[i];
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    todoContainer.setAttribute("position", i);
    const leftTodoContainer = document.createElement("div");
    leftTodoContainer.classList.add("left-todo-container");
    const doneCheckbox = document.createElement("input");
    doneCheckbox.setAttribute("type", "checkbox");
    doneCheckbox.addEventListener("input", markComplete);
    const titleHeading = document.createElement("h4");
    titleHeading.textContent = title;

    leftTodoContainer.appendChild(doneCheckbox);
    leftTodoContainer.appendChild(titleHeading);
    const midTodoContainer = document.createElement("div");
    midTodoContainer.classList.add("mid-todo-container");

    let expand = document.createElement("svg");
    expand.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>';
    expand.addEventListener("click", () => expandTodo.openTodo(i));
    if (!description) {
      expand.style.display = "none";
    }
    midTodoContainer.appendChild(expand);

    const rightTodoContainer = document.createElement("div");
    rightTodoContainer.classList.add("right-todo-container");

    const dueDateContainer = document.createElement("div");
    dueDateContainer.classList.add("due-date-container");

    const dueDateText = document.createElement("p");
    dueDateText.textContent = format(dueDate, "PPP");
    dueDateContainer.appendChild(dueDateText);

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority-container");
    const priorityText = document.createElement("p");
    priorityText.textContent = priority;
    if (priority === "Low-priority") priorityText.style.color = "#00b884";
    else if (priority === "Medium-priority")
      priorityText.style.color = "#FFC800";
    else if (priority === "High-priority") priorityText.style.color = "#f74092";
    priorityContainer.appendChild(priorityText);

    const edit = document.createElement("button");
    edit.classList.add("edit-btn");
    edit.addEventListener("click", editTodo);
    edit.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"/></svg>';
    edit.setAttribute("position", i);
    const deleteBtn = document.createElement("button");

    deleteBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("position", i);
    deleteBtn.addEventListener("click", deleteTodo);
    rightTodoContainer.appendChild(dueDateContainer);
    rightTodoContainer.appendChild(priorityContainer);
    rightTodoContainer.appendChild(edit);
    rightTodoContainer.appendChild(deleteBtn);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");
    const descriptionText = document.createElement("p");
    descriptionText.textContent = description;
    descriptionContainer.appendChild(descriptionText);

    todoContainer.appendChild(leftTodoContainer);
    todoContainer.appendChild(rightTodoContainer);
    todoContainer.appendChild(descriptionContainer);
    todoContainer.appendChild(midTodoContainer);

    todosContainer.appendChild(todoContainer);
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
  notesDom.renderNotesContainer();
}
