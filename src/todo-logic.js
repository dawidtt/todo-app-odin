let todosArray = [];
function createTodo(title, description = "", dueDate, priority = "easy") {
  return { title, description, dueDate, priority };
}
todosArray.push(createTodo("Wyniesc smieci"));
