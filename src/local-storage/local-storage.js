import { todosArray } from "../todo-container/todo-logic";
import { projects } from "../projects-modules/project-logic";
import { format } from "date-fns";
export {
  saveTodosInLocalStorage,
  retriveTodosFromLocalStorage,
  saveProjectsInLocalStorage,
};
function saveTodosInLocalStorage() {
  // const copyTodosArray = todosArray;
  // console.log(copyTodosArray);
  // for (const todo of copyTodosArray) {
  //   // const year = todo.dueDate.getFullYear();
  //   // const month = todo.dueDate.getMonth();
  //   // const day = todo.dueDate.getDay();
  //   console.log(todo.dueDate);
  //   const dateToSwitch = todo.dueDate.getTime();
  //   console.log(dateToSwitch);
  //   todo.dueDate = dateToSwitch;
  // }
  localStorage.setItem("todosArray", JSON.stringify(todosArray));
}
function retriveTodosFromLocalStorage() {
  console.log(todosArray);
  console.log(JSON.parse(localStorage.getItem("todosArray")));

  const retrivedTodosArray = JSON.parse(localStorage.getItem("todosArray"));
  // for (const todo of retrivedTodosArray) {
  //   const dateToSwitch = new Date(todo.dueDate);

  //   console.log(dateToSwitch);
  //   console.log(new Date());

  //   console.log(typeof todo.dueDate);
  // }

  return retrivedTodosArray;
}
function saveProjectsInLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects.getArray()));
}
