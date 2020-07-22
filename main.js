const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  });
  // and load the index.html of the app.
  win.loadFile('www/index.html');

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow)