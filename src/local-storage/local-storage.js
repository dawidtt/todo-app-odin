import { todosArray } from "../todo-container/todo-logic";
import { createProject, projects } from "../projects-modules/project-logic";
import { format } from "date-fns";
export {
  saveTodosInLocalStorage,
  retriveTodosFromLocalStorage,
  saveProjectsInLocalStorage,
  retriveProjectsFromLocalStorage,
};
function saveTodosInLocalStorage() {
  localStorage.setItem("todosArray", JSON.stringify(todosArray));
}
function retriveTodosFromLocalStorage() {
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
  const data = projects.getArray().map((project) => ({
    projectName: project.projectName,
    todos: project.getTodosArray(),
  }));

  localStorage.setItem("projects", JSON.stringify(data));
}
function retriveProjectsFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("projects"));
  return data.map((storedProject) => {
    const project = createProject(
      storedProject.projectName,
      storedProject.todos
    );
    return project;
  });

  // const retrivedProjectsArray = JSON.parse(localStorage.getItem("projects"));
  // for (let project of retrivedProjectsArray) {
  //   project = createProject(project.projectName, project.todos);
  //   console.log(project.getTodosArray());
  // }
  // console.log("!!!!");
  // console.log(retrivedProjectsArray);
  // return retrivedProjectsArray;
}
