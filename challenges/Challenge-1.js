
const yargs = require('yargs');

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
      type: String,
    },
    // 1.setup a body option for the add command
    body: {
      // 2.configure a description, make it required, and for it to be srring
      describe: 'Note body',
      demandOption: true,
      type: 'String',

    }
  },

  handler: function (argv) {
    console.log(`Title: ` + argv.title);
    // 3. log the bidy value in the handler function
    console.log(`Body: ` + argv.body);
  }
})

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",

  handler: function () {
    console.log('Removing the note');
  }
})

// create list command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler: function () {
    console.log('listing out all notes');
  }
})

// create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log('Reading the notes');
  }
})

yargs.parse();