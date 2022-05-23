import React, { useEffect, useState } from 'react';

import styles from './app.css';
import './fonts/Geometria/stylesheet.css';
import { useActions } from './hooks/useActions';
import { Calculator } from './components/Calculator';
import { ContextMenu } from './components/ContextMenu';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
	const {expression} = useTypedSelector(state => state);
	const {checkKey, pastExpression} = useActions();
	const [contextmenu, setContextMenu] = useState({x: 0, y: 0, visible: false});

	const handleKeyboardPress = (e: KeyboardEvent) => {
		checkKey(e.key);
	}
	
	const handlePaste = (e: any) => {
		const event = e as ClipboardEvent;
		const paste = event?.clipboardData?.getData('text') || '';
		pastExpression(paste);
	}

	const handleContextMenu = (e: MouseEvent) => {
		e.preventDefault();
		const x = e.clientX;
		const y = e.clientY;
		setContextMenu({x, y, visible: true});
	}

	const handleRightClick = (e: MouseEvent) => {
		setContextMenu({x: 0, y: 0, visible: false});
	}

	useEffect(() => {
		window.addEventListener('paste', handlePaste);
		window.addEventListener('click', handleRightClick);
		window.addEventListener('keydown', handleKeyboardPress);
		window.addEventListener('contextmenu', handleContextMenu);

		return () => {
			window.addEventListener('paste', handlePaste);
			window.addEventListener('contextmenu', handleContextMenu);
			window.removeEventListener('keydown', handleKeyboardPress);
		}
	}, [expression]);

	return (
		<div className={styles.app}>
			{contextmenu.visible && <ContextMenu x={contextmenu.x} y={contextmenu.y} /> }
			
			<div className={styles.wrapper}>
				<Calculator />
			</div>
		</div>
	);
}

export default App;