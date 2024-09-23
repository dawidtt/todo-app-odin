import { format } from "date-fns";
export function createToDo() {
  let todosArray = [];
  function createTODoObject(
    title,
    description = "",
    dueDate = format(new Date(), "PPP"),
    priority = "Low-priority"
  ) {
    return { title, description, dueDate, priority };
  }
  todosArray.push(createTODoObject("Wyniesc smieci"));
  todosArray.push(
    createTODoObject(
      "haloo",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat, reprehenderit, optio excepturi illum, est temporibus ullam quos perspiciatis recusandae aliquid in tempora soluta? Debitis excepturi modi quos voluptas libero!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat,",
      format(new Date(), "PPP"),
      "Medium-priority"
    )
  );

  return todosArray;
}
