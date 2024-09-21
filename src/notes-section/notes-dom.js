import "./notes.css";
import * as notesLogic from "./notes-logic.js";
export function renderNotesContainer() {
  const mainPath = document.querySelector("main");
  const notesWrapper = document.createElement("div");
  notesWrapper.classList.add("notes-wrapper");
  const notesHeading = document.createElement("h2");
  notesHeading.textContent = "Notes";
  notesWrapper.appendChild(notesHeading);

  const notesContainer = document.createElement("div");
  notesContainer.classList.add("notes-container");

  for (let i = 0; i < notesLogic.notesArray.length; i++) {
    const note = document.createElement("div");
    note.classList.add("note");
    const noteTop = document.createElement("div");
    note.classList.add("note-top");
    const noteTextContainer = document.createElement("div");
    noteTextContainer.classList.add("note-text-container");
    const noteHeading = document.createElement("h4");
    noteHeading.textContent = notesLogic.notesArray[i].title;
    const noteText = document.createElement("p");
    noteText.textContent = notesLogic.notesArray[i].description;
    noteTextContainer.appendChild(noteHeading);
    noteTextContainer.appendChild(noteText);

    note.appendChild(noteTop);
    note.appendChild(noteTextContainer);
    notesWrapper.appendChild(note);
  }

  mainPath.appendChild(notesWrapper);
}
renderNotesContainer();
