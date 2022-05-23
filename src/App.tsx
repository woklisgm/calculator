import React, { useEffect } from 'react';

import styles from './app.css';
import './fonts/Geometria/stylesheet.css';
import { useActions } from './hooks/useActions';
import { Calculator } from './components/Calculator';

import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
	const {expression} = useTypedSelector(state => state);
	const {checkKey} = useActions();
	
	const handleKeyboardPress = (e: KeyboardEvent) => {
		checkKey(e.key);
	}
	
	useEffect(() => {
		window.addEventListener('keydown', handleKeyboardPress);
		
		return () => {
			window.removeEventListener('keydown', handleKeyboardPress) 
		}
	}, [expression]);

	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<Calculator />
			</div>
		</div>
	);
}

export default App;
