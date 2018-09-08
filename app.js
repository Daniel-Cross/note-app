console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const res = notes.addNote();
console.log(res);

const user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}!`);
