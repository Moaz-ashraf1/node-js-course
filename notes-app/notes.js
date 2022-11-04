const chalk = require('chalk');
const fs = require('fs');
const { stringify } = require('querystring');

const addNotes = (title, body) => {
  // load notes
  const notes = loadNotes();
  const dublicateNote = notes.find((note) => note.title === title);


  if (!dublicateNote) {
    notes.push({
      title: title,
      body: body
    })
    // save notes
    saveNote(notes)
    console.log(chalk.green.inverse('New node added!'));

  }
  else {
    console.log(chalk.red.inverse('Note title taken'));
  }
}

const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync('notes.json');
    const dataJSON = bufferData.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKepp = notes.filter(note => {
    if (note.title !== title) return note;
  })
  if (notes.length > notesToKepp.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNote(notesToKepp);
  } else {
    console.log(chalk.red.inverse('No note found'));

  }
  // save notes 

}

const listNote = () => {
  console.log(chalk.inverse('YOUR NOTES'));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  })

}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => {
    if (note.title === title) return note
  })
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('NO NOTE FOUND ?'));
  }


}

module.exports = {
  addNotes: addNotes,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,

};

