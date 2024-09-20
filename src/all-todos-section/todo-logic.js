import { format } from "date-fns";
export function createToDo() {
  let todosArray = [];
  function createTodo(
    title,
    description = "",
    dueDate = format(new Date(), "PPP"),
    priority = "easy"
  ) {
    return { title, description, dueDate, priority };
  }
  todosArray.push(createTodo("Wyniesc smieci"));
  todosArray.push(createTodo("haloo"));

  return todosArray;
}
