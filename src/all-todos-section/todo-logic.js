import { format } from "date-fns";
export { todosArray, createToDo };
let todosArray = [];

function createToDo(
  title,
  description = "",
  dueDate = new Date(),
  priority = "Low-priority"
) {
  return { title, description, dueDate, priority };
}

todosArray.push(createToDo("Wyniesc smieci"));
todosArray.push(
  createToDo(
    "haloo",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat, reprehenderit, optio excepturi illum, est temporibus ullam quos perspiciatis recusandae aliquid in tempora soluta? Debitis excepturi modi quos voluptas libero!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat,",
    new Date(),
    "Medium-priority"
  )
);
todosArray.push(
  createToDo(
    "hej haj helol",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat, reprehenderit, optio excepturi illum, est temporibus ullam quos perspiciatis recusandae aliquid in tempora soluta? Debitis excepturi modi quos voluptas libero!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat,",
    new Date(),
    "High-priority"
  )
);
