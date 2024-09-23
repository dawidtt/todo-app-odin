import { todosArr, generateAllTodos } from "./all-todos-section/all-todos-dom";
function switchTabs(e) {
  const mainPath = document.querySelector("main");
  const navBtnsNodeList = document.querySelectorAll("nav button");
  const navBtnsArray = Array.from(navBtnsNodeList);
  for (const navBtn of navBtnsArray) {
    navBtn.classList.remove("nav-section-checked");
  }
  mainPath.innerHTML = "";
  e.srcElement.classList.add("nav-section-checked");
}
const all = document.querySelector("#all-btn");
const today = document.querySelector("#today-btn");
const calendar = document.querySelector("#calendar-btn");
all.classList.add("nav-section-checked");
all.addEventListener("click", switchTabs);
all.addEventListener("click", () => generateAllTodos(todosArr));
today.addEventListener("click", switchTabs);
calendar.addEventListener("click", switchTabs);
