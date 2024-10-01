import { createProject, projects } from "./project-logic";
import { removeTodo } from "../todo-container/todo-logic";
import { generateMyProjects } from "./project-dom";
export { deleteProject };
function deleteProject(project) {
  const allProjectTodos = project.getTodosArray();
  for (const todo of allProjectTodos) {
    removeTodo(todo);
  }
  projects.deleteProject(project);
  const allTodos = document.querySelector("#all-btn");
  allTodos.click();
  const projectsPath = document.querySelector("#projects-container-top");
  while (projectsPath.childNodes.length > 1) {
    projectsPath.removeChild(projectsPath.lastChild);
  }
  generateMyProjects();
}
