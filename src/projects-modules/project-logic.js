export { projects, createProjectsArray, createProject };

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
  return { projectName, todos, addTodoToProject, deleteTodoFromProject };
}
const newProject = createProject("Bardzo wazny projekt");
console.log(newProject);
const projects = createProjectsArray();
projects.addProject(newProject);
console.log(projects.getArray());
