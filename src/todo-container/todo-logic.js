import { general } from "../projects-modules/project-logic";

export { todosArray, createToDo };
let todosArray = [];

function createToDo(
  title,
  description = "",
  dueDate = new Date(),
  priority = "Low-priority",
  completed = false
) {
  return { title, description, dueDate, priority, completed };
}
const exampleTodo = createToDo(
  "haloo",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat, reprehenderit, optio excepturi illum, est temporibus ullam quos perspiciatis recusandae aliquid in tempora soluta? Debitis excepturi modi quos voluptas libero!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat,",
  new Date(),
  "Medium-priority"
);
const exampleTwoTodo = createToDo(
  "eska",
  "Lorem ipsum, dolor sit amet consectei illum, est temporibus ullam quos perspiciatis recusandae aliquid in tempora soluta? Debitis excepturi modi quos voluptas libero!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat,",
  new Date(),
  "High-priority"
);
todosArray.push(exampleTodo);
general.addTodoToProject(exampleTodo);
todosArray.push(exampleTwoTodo);
general.addTodoToProject(exampleTwoTodo);
