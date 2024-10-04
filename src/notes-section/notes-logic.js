import {
  retriveNotesFromLocalStorage,
  saveNotesInLocalStorage,
} from "../local-storage/local-storage";

export { createNoteObject, addNewNote, notesArray };
let notesArray = [];

function createNoteObject(title, description) {
  return { title, description };
}

function addNewNote(note) {
  notesArray.push(note);
}

if (localStorage.getItem("notesArray")) {
  notesArray = retriveNotesFromLocalStorage();
} else {
  const exampleNote = createNoteObject(
    "Example Note",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat, reprehenderit, optio excepturi illum, est temporibus ullam quos perspiciatis recusandae aliquid in tempora soluta? Debitis excepturi modi quos voluptas libero!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat,"
  );
  addNewNote(exampleNote);
  saveNotesInLocalStorage(notesArray);
}
