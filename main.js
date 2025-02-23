const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Handle the IPC request to run a Docker command
ipcMain.handle('run-docker', async (event, cliCommand) => {
  // Construct the full command. For instance:
  // docker run --rm --platform linux/amd64 qubic-cli <cliCommand>
  const fullCommand = `docker run --rm --platform linux/amd64 qubic-cli ${cliCommand}`;
  console.log('Executing:', fullCommand);

  return new Promise((resolve, reject) => {
    exec(fullCommand, (error, stdout, stderr) => {
      if (error) {
        console.error('Error:', error);
        return reject(stderr || error.message);
      }
      resolve(stdout);
    });
  });
});