const { app, BrowserWindow, ipcMain } = require('electron')

let main = null

app.commandLine.appendSwitch('enable-features', 'V8Ignition')
app.commandLine.appendSwitch('enable-webassembly')

app.on('ready', function () {
  main = new BrowserWindow({
    show: false,
    webPreferences: {
      webSecurity: false
    }
  })

  main.setMenu(null)

  main.loadURL('file:///' + __dirname + '/index.html')

  main.on('close', event => {
    main.webContents.emit('quitting')
  })

  main.on('closed', function () {
    main = null
  })
})

app.on('window-all-closed', () => app.quit())

ipcMain.on('log', (e, msg) => console.log(...msg))
ipcMain.on('error', (e, msg) => console.error(...msg))
