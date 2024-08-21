import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18n from './lang/locale';

function App() {
	const [t] = useTranslation();

	const change = () => {
		i18n.changeLanguage(i18n.language === 'ko' ? 'en' : 'ko');
		console.log('??');
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p onClick={change}>{t('helloWorld')}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
