export { projects, createProject } from "./project-logic.js";
function createProjectsArray() {
  const projectsArray = [];
  const addProject = (project) => {
    projectsArray.push(project);
  };
  const deleteProject = (project) => {
    const indexOfProject = projectsArray.indexOf(project);
    projectsArray.splice(indexOfProject, 1);
  };
  return { projectsArray, addProject };
}
function createProject(projectName, todos = []) {
  const addTodoToProject = (todo) => {
    todos.push(todo);
  };
  const deleteTodoFromProject = (todo) => {
    const indexOfTodo = todos.indexOf(todo);
    todos.splice(indexOfTodo, 1);
  };
  return { projectName, todos, addTodoToProject, deleteTodoFromProject };
}

const projects = createProjectsArray();
projects.addProject(createProject("Nazwa projektu"));
