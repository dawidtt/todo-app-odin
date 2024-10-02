import { general } from "../projects-modules/project-logic";
import {
  saveTodosInLocalStorage,
  retriveTodosFromLocalStorage,
} from "../local-storage/local-storage";
export { todosArray, createToDo, removeTodo };
let todosArray = [];

function createToDo(
  title,
  description = "",
  dueDate = new Date(),
  priority = "Low-priority",
  project = "General",
  completed = false
) {
  return { title, description, dueDate, priority, completed, project };
}
const exampleTodo = createToDo(
  "Example",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat, reprehenderit, optio excepturi illum, est temporibus ullam quos perspiciatis recusandae aliquid in tempora soluta? Debitis excepturi modi quos voluptas libero!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat,",
  new Date(),
  "Medium-priority"
);
function removeTodo(todo) {
  const indexOfTodo = todosArray.indexOf(todo);
  todosArray.splice(indexOfTodo, 1);
}
if (localStorage.getItem("todosArray")) {
  retriveTodosFromLocalStorage();
} else {
  todosArray.push(exampleTodo);
  general.addTodoToProject(exampleTodo);
  saveTodosInLocalStorage();
}
