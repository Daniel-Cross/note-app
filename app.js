console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const command = process.argv[2];
console.log('Command ', command);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all nodes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'delete') {
  console.log('Deleting note');
} else {
  console.log('Something went wrong');
}
