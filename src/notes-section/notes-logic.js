export { createNoteObject, addNewNote, notesArray };

let notesArray = [];

function createNoteObject(title, description) {
  return { title, description };
}

function addNewNote(note) {
  notesArray.push(note);
}

const casualNote = createNoteObject("Nowa notatka", "blalalalala");
const importantNote = createNoteObject(
  "wazna notatka",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat, reprehenderit, optio excepturi illum, est temporibus ullam quos perspiciatis recusandae aliquid in tempora soluta? Debitis excepturi modi quos voluptas libero!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic placeat, reprehenderit, optio excepturi illum, est temporibus ullam quos perspiciatis recusandae aliquid in tempora soluta? Debitis excepturi modi quos voluptas libero!"
);

addNewNote(casualNote);
addNewNote(importantNote);
addNewNote(importantNote);
