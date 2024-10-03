import { todosArray } from "../todo-container/todo-logic";
import { projects } from "../projects-modules/project-logic";
import { format } from "date-fns";
export {
  saveTodosInLocalStorage,
  retriveTodosFromLocalStorage,
  saveProjectsInLocalStorage,
};
function saveTodosInLocalStorage() {
  const copyTodosArray = todosArray;
  for (const todo of copyTodosArray) {
    const year = todo.dueDate.getFullYear();
    const month = todo.dueDate.getMonth();
    const day = todo.dueDate.getDay();
    const dateToSwitch = [year, month + 1, day];
    console.log(dateToSwitch);
    todo.dueDate = dateToSwitch;
  }
  localStorage.setItem("todosArray", JSON.stringify(todosArray));
}
function retriveTodosFromLocalStorage() {
  console.log(todosArray);
  console.log(JSON.parse(localStorage.getItem("todosArray")));

  const retrivedTodosArray = JSON.parse(localStorage.getItem("todosArray"));
  for (const todo of retrivedTodosArray) {
    const dateToSwitch = new Date(
      todo.dueDate[0],
      todo.dueDate[1],
      todo.dueDate[2]
    );
    console.log(dateToSwitch);
    todo.dueDate = dateToSwitch;
  }
  console.log(retrivedTodosArray);
  todosArray.splice(0, todosArray.length);
  todosArray.push(retrivedTodosArray);
  console.log(todosArray);
}
function saveProjectsInLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects.getArray()));
}
