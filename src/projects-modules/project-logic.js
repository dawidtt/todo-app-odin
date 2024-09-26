import { createToDo } from "../todo-container/todo-logic";

export { projects, general, createProjectsArray, createProject };

function createProjectsArray() {
  const projectsArray = [];
  const addProject = (project) => {
    projectsArray.push(project);
  };
  const deleteProject = (project) => {
    const indexOfProject = projectsArray.indexOf(project);
    projectsArray.splice(indexOfProject, 1);
  };
  const getArray = () => projectsArray;

  return { addProject, deleteProject, getArray };
}

function createProject(projectName, todos = []) {
  const addTodoToProject = (todo) => {
    todos.push(todo);
  };
  const deleteTodoFromProject = (todo) => {
    const indexOfTodo = todos.indexOf(todo);
    todos.splice(indexOfTodo, 1);
  };
  const getTodosArray = () => todos;
  return {
    projectName,
    getTodosArray,
    addTodoToProject,
    deleteTodoFromProject,
  };
}
const general = createProject("General");
console.log(general);
const projects = createProjectsArray();
projects.addProject(general);
// general.addTodoToProject(createToDo("cos"));
// console.log(projects.getArray());
