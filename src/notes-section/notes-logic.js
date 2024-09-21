export { createNoteObject, addNewNote, notesArray };

let notesArray = [];

function createNoteObject(title, description) {
  return { title, description };
}

function addNewNote(note) {
  notesArray.push(casualNote);
}

const casualNote = createNoteObject("Nowa notatka", "blalalalala");
addNewNote(casualNote);
