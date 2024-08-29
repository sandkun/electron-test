import { app, BrowserWindow, dialog } from 'electron';
import path from 'path';
import url from 'url';
import './IpcHandler';
import { autoUpdater } from 'electron-updater';

let win: BrowserWindow | null = null;

autoUpdater.on('checking-for-update', () => {
	dialog.showMessageBox({
		type: 'info',
		title: '업데이트 확인',
		message: '업데이트 확인중입니다',
		defaultId: 0,
	});
});

autoUpdater.on('update-available', (info: any) => {
	dialog.showMessageBox({
		type: 'info',
		title: '업데이트 확인',
		message: '업데이트가 가능합니다.',
		defaultId: 0,
	});
});

autoUpdater.on('update-not-available', (info: any) => {
	dialog.showMessageBox({
		type: 'info',
		title: '업데이트 확인',
		message: '최신버전 입니다.',
		defaultId: 0,
	});
});

autoUpdater.on('update-downloaded', (info) => {
	dialog
		.showMessageBox({
			type: 'info',
			title: '업데이트 확인',
			message: '업데이트가 완료되었습니다. 재시작해주세요.',
			defaultId: 0,
		})
		.then((res) => {
			autoUpdater.quitAndInstall();
		});
});

function createWindow() {
	win = new BrowserWindow({
		width: 1920,
		height: 1080,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			contextIsolation: true,
			nodeIntegration: false,
		},
	});

	/*
	 * ELECTRON_START_URL을 직접 제공할경우 해당 URL을 로드합니다.
	 * 만일 URL을 따로 지정하지 않을경우 (프로덕션빌드) React 앱이
	 * 빌드되는 build 폴더의 index.html 파일을 로드합니다.
	 * */
	const startUrl =
		process.env.ELECTRON_START_URL ||
		url.format({
			pathname: path.join(__dirname, '/../../build/index.html'),
			protocol: 'file:',
			slashes: true,
		});

	/*
	 * startUrl에 배정되는 url을 맨 위에서 생성한 BrowserWindow에서 실행시킵니다.
	 * */
	win.loadURL(startUrl);
}

app.on('ready', () => {
	createWindow();
	autoUpdater.checkForUpdates();
});
