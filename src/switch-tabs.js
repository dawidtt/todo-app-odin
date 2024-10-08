import { generateAllTodos } from "./all-todos-section/all-todos-dom";
import { generateTodayTodos } from "./today-section/today-dom";
import { todosArray } from "./todo-container/todo-logic";
export { switchTabs };
function switchTabs(e) {
  const mainPath = document.querySelector("main");
  const navBtnsNodeList = document.querySelectorAll("nav button");
  const navBtnsArray = Array.from(navBtnsNodeList);

  const projectsNodeList = document.querySelectorAll(
    "#projects-container-top button"
  );
  const projectsArray = Array.from(projectsNodeList);
  for (const navBtn of navBtnsArray) {
    navBtn.classList.remove("nav-section-checked");
  }

  for (const projectBtn of projectsArray) {
    projectBtn.classList.remove("nav-section-checked");
  }
  mainPath.innerHTML = "";
  e.srcElement.classList.add("nav-section-checked");
}

const all = document.querySelector("#all-btn");
const today = document.querySelector("#today-btn");
all.classList.add("nav-section-checked");
all.addEventListener("click", switchTabs);
all.addEventListener("click", () => generateAllTodos(todosArray));
today.addEventListener("click", switchTabs);
today.addEventListener("click", () => generateTodayTodos(todosArray));
