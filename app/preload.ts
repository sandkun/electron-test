import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('versions', {
	node: process.versions.node,
	electron: process.versions.electron,
	chrome: process.versions.chrome,
});

contextBridge.exposeInMainWorld('fs', {
	saveData: (data: string) => ipcRenderer.send('save-data', data),
});
