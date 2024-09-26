export function expandTodo(numberInNodeArray) {
  const todosContainers = document.querySelector(
    `.todo-container[position="${numberInNodeArray}"]`
  );
  const todosDescription = document.querySelector(
    `.todo-container[position="${numberInNodeArray}"] .description-container p`
  );
  const todosSwtichIcon = document.querySelector(
    `.todo-container[position="${numberInNodeArray}"] .mid-todo-container svg.ionicon`
  );
  const todosContainersArray = Array.from(todosContainers);
  const todosDescriptionArray = Array.from(todosDescription);
  const todosSwtichIconArray = Array.from(todosSwtichIcon);
  console.log(todosContainersArray);
  console.log(numberInNodeArray);
  console.log(todosContainers);

  // todosContainersArray[numberInNodeArray].classList.toggle("open");
  // todosDescriptionArray[numberInNodeArray].classList.toggle("open");
  // todosSwtichIconArray[numberInNodeArray].classList.toggle("open");
  todosContainers.classList.toggle("open");
  todosDescription.classList.toggle("open");
  todosSwtichIcon.classList.toggle("open");
}
