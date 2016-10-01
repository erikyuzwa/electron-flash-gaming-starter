const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Specify flash path, supposing it is placed in the same directory with main.js.
let pluginName;
switch (process.platform) {
  case 'win32':
    // by default we're referencing the 64-bit version
    pluginName = 'plugins/flash/win64/pepflashplayer64_23_0_0_162.dll'

    // if you want the 32-bit version instead, then uncomment the following
    // pluginName = 'plugins/flash/win32/pepflashplayer32_23_0_0_162.dll'
    break
  case 'darwin':
    // TODO hunt down MacOS pepperflash plugin
    pluginName = 'PepperFlashPlayer.plugin'
    break
  case 'linux':
    // TODO hunt down linus pepperflash plugin 
    pluginName = 'libpepflashplayer.so'
    break
}

// put everything together and pass as a command line param to the app. path.join will take care of our
// '\' or '/' in the app depending on OS
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName));

// Optional: Specify flash version, for example, v23.0.0.162
app.commandLine.appendSwitch('ppapi-flash-version', '23.0.0.162');


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
      width: 800, 
      height: 600,
      webPreferences: {
        plugins: true
      }
    });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  // TODO find a way to open the devtools window undocked to this one
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
