const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  runDocker: (command) => ipcRenderer.invoke('run-docker', command)
});