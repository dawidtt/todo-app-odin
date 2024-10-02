import { todosArray } from "../todo-container/todo-logic";
import { projects } from "../projects-modules/project-logic";
export {
  saveTodosInLocalStorage,
  retriveTodosFromLocalStorage,
  saveProjectsInLocalStorage,
};
function saveTodosInLocalStorage() {
  localStorage.setItem("todosArray", JSON.stringify(todosArray));
}
function retriveTodosFromLocalStorage() {
  console.log(todosArray);
  console.log(JSON.parse(localStorage.getItem("todosArray")));

  const retrivedTodosArray = JSON.parse(localStorage.getItem("todosArray"));
  console.log(retrivedTodosArray);
  todosArray.splice(0, todosArray.length);
  todosArray.push(retrivedTodosArray);
  console.log(todosArray);
}
function saveProjectsInLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects.getArray()));
}
