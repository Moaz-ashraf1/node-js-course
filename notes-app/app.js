
const { default: chalk } = require('chalk');
const { demandOption, string, argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')
//customize yargs version
yargs.version('1.1.0');

// add, remove, read, list

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      // 2.configure a description, make it required, and for it to be srring
      describe: 'Note body',
      demandOption: true,
      type: 'String',

    }
  },

  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
})

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: 'title of the note you want to delete',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})

// create list command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler() {
    notes.listNote();
  }
})

// create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.readNote(argv.title)

  }
})

yargs.parse();