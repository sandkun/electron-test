import { app, ipcMain } from 'electron';
import path from 'path';
import fs from 'fs';

ipcMain.on('save-data', (event, data) => {
	const jsonPath = path.join(app.getPath('userData'), 'data.json');
	fs.writeFile(jsonPath, JSON.stringify(data, null, 2), (err: any) => {
		if (err) {
			event.reply('save-data-reply', { success: false, error: err });
			return;
		} else {
			event.reply('save-data-reply', { success: true });
			console.log(jsonPath, 'Data saved');
		}
	});
});
