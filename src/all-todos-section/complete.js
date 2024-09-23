export { markComplete };

function markComplete(e) {
  if (!e.target.checked) {
    const completeContainer = document.querySelector(` .completed-container`);
    e.target.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.lastChild
    );
  } else {
    const currentTodoContainer = e.target.parentNode.parentNode;
    const completeContainer = document.createElement("div");
    completeContainer.classList.add("completed-container");
    completeContainer.style.height = "100%";
    completeContainer.style.width = "100%";
    completeContainer.style.position = "absolute";
    completeContainer.style.backgroundColor = "#c6c3cd71";
    completeContainer.style.left = "0";

    completeContainer.style.top = "0";

    currentTodoContainer.appendChild(completeContainer);
  }
}
