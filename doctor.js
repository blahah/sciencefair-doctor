const { ipcRenderer } = require('electron');

console.log = function () {
  ipcRenderer.send('log', arguments)
}

console.error = function () {
  ipcRenderer.send('error', arguments)
}

require('dat-doctor')({
  id: '2edfaf31ff5635d86294af596bda0892f990e79eb92a0c1924ee9f01933ceedb'
})
