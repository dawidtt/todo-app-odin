import { general } from "../projects-modules/project-logic";

export { todosArray, createToDo };
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

todosArray.push(exampleTodo);
general.addTodoToProject(exampleTodo);
