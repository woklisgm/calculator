import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.global.css';
import './fonts/Geometria/stylesheet.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<App />
)