import { format } from "date-fns";
export function createToDo() {
  let todosArray = [];
  function createTODoObject(
    title,
    description = "",
    dueDate = format(new Date(), "PPP"),
    priority = "easy"
  ) {
    return { title, description, dueDate, priority };
  }
  todosArray.push(createTODoObject("Wyniesc smieci"));
  todosArray.push(createTODoObject("haloo"));

  return todosArray;
}
