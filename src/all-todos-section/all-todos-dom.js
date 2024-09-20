import "./all-todos.css";
import * as todoLogic from "./todo-logic.js";
let todosArr = todoLogic.createToDo();
generateAllTodos(todosArr);

export function generateAllTodos(todosArr) {
  const mainPath = document.querySelector("main");

  const allWrapper = document.createElement("div");
  allWrapper.classList.add("all-wrapper");
  const allHeading = document.createElement("h2");
  allHeading.textContent = "All ToDos";
  allWrapper.appendChild(allHeading);

  for (let i = 0; i < todosArr.length; i++) {
    const { title, description, dueDate, priority } = todosArr[i];
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    const leftTodoContainer = document.createElement("div");
    leftTodoContainer.classList.add("left-todo-container");
    const titleHeading = document.createElement("h4");
    titleHeading.textContent = title;
    const descriptionText = document.createElement("p");
    descriptionText.textContent = description;
    leftTodoContainer.appendChild(titleHeading);
    leftTodoContainer.appendChild(descriptionText);

    const midTodoContainer = document.createElement("div");
    midTodoContainer.classList.add("mid-todo-container");
    const expand = document.createElement("p");
    expand.textContent = "expand";
    midTodoContainer.appendChild(expand);

    const rightTodoContainer = document.createElement("div");
    rightTodoContainer.classList.add("right-todo-container");

    const dueDateContainer = document.createElement("div");
    dueDateContainer.classList.add("due-date-container");

    const dueDateText = document.createElement("p");
    dueDateText.textContent = dueDate;
    dueDateContainer.appendChild(dueDateText);

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority-container");
    const priorityText = document.createElement("p");
    priorityText.textContent = priority;
    priorityContainer.appendChild(priorityText);

    const edit = document.createElement("button");
    edit.classList.add("edit-btn");
    edit.textContent = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    rightTodoContainer.appendChild(dueDateContainer);
    rightTodoContainer.appendChild(priorityContainer);
    rightTodoContainer.appendChild(edit);
    rightTodoContainer.appendChild(deleteBtn);

    todoContainer.appendChild(leftTodoContainer);
    todoContainer.appendChild(midTodoContainer);
    todoContainer.appendChild(rightTodoContainer);
    allWrapper.appendChild(todoContainer);
  }
  const bottomWrapper = document.createElement("div");
  bottomWrapper.classList.add("bottom-wrapper");
  const createTodo = document.createElement("button");
  createTodo.textContent = "Create ToDo";
  bottomWrapper.appendChild(createTodo);
  mainPath.appendChild(allWrapper);
  mainPath.appendChild(bottomWrapper);
}
