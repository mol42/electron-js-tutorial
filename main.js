const { app, BrowserWindow } = require("electron");
const { dialog } = require("electron");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // and load the index.html of the app.
  // win.loadFile('index.html');
  win.loadFile("www/index.html");

  win.webContents.openDevTools();

  // Renderer process içinde çağrılamayan bu kod main process içinde çalışacak
  // örnek olması amacı ile ekledim buraya.
  setTimeout(() => {
    dialog.showOpenDialog({ properties: ["openFile", "multiSelections"] });
  }, 2000);
}

app.whenReady().then(createWindow);
