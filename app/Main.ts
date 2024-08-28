import { app, autoUpdater, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';
import log from 'electron-log';
import './IpcHandler';

autoUpdater.on('checking-for-update', () => {
	log.info('업데이트 확인중...');
});

autoUpdater.on('update-available', (info: any) => {
	log.info('업데이트 가능합니다.');
});

autoUpdater.on('update-not-available', (info: any) => {
	log.info('현재 최신버전 입니다.', info);
});

autoUpdater.on('update-downloaded', (info) => {
	log.info('업데이트가 완료되었습니다.');
});

function createWindow() {
	/*
	 * */
	const win = new BrowserWindow({
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

app.on('ready', createWindow);
