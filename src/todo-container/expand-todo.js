export function expandTodo(numberInNodeArray) {
  const todosContainersNodeList = document.querySelectorAll(".todo-container");
  const todosDescriptionNodeList = document.querySelectorAll(
    ".description-container p"
  );
  const todosSwtichIconNodeList = document.querySelectorAll(
    ".mid-todo-container svg.ionicon"
  );
  const todosContainersArray = Array.from(todosContainersNodeList);
  const todosDescriptionArray = Array.from(todosDescriptionNodeList);
  const todosSwtichIconArray = Array.from(todosSwtichIconNodeList);

  todosContainersArray[numberInNodeArray].classList.toggle("open");
  todosDescriptionArray[numberInNodeArray].classList.toggle("open");
  todosSwtichIconArray[numberInNodeArray].classList.toggle("open");
}
