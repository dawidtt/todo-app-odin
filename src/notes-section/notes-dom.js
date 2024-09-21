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
    noteTop.classList.add("note-top");
    const noteTextContainer = document.createElement("div");
    noteTextContainer.classList.add("note-text-container");
    const noteHeading = document.createElement("h4");
    noteHeading.textContent = notesLogic.notesArray[i].title;
    const svg = document.createElement("svg");
    svg.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="48"/><circle cx="416" cy="256" r="48"/><circle cx="96" cy="256" r="48"/></svg>';
    const noteText = document.createElement("p");
    noteText.textContent = notesLogic.notesArray[i].description;

    noteTop.appendChild(noteHeading);
    noteTop.appendChild(svg);
    noteTextContainer.appendChild(noteText);

    note.appendChild(noteTop);
    note.appendChild(noteTextContainer);
    notesContainer.appendChild(note);
  }
  notesWrapper.appendChild(notesContainer);

  const addNoteContainer = document.createElement("div");
  addNoteContainer.classList.add("add-note-container");
  const addNoteBtn = document.createElement("button");
  addNoteBtn.classList.add("add-note-btn");
  addNoteContainer.appendChild(addNoteBtn);
  notesWrapper.appendChild(addNoteContainer);
  mainPath.appendChild(notesWrapper);
}
renderNotesContainer();
