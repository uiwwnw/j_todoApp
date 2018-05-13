// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const saveFile = require('remote').require('electron-save-file');


  document.querySelector('body').onclick = function() {
    saveFile('/text.txt') // should begins with 'http' or 'file://' or '/'
    .then(() => console.log('saved'))
    .catch(err => console.error(err.stack));
  console.log('')
  }