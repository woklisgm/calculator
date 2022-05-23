import React from 'react';

import styles from './context-menu.module.css';
import { useActions } from '../../hooks/useActions';

function ContextMenu({x, y}: {x: number, y: number}) {
	const {pastExpression, clearExpression} = useActions();

	const handlePaste = () => {
		navigator.clipboard.readText().then(text => {
				text && pastExpression(text);
			})
			.catch(err => {
				console.log('Error read from buffer');
			});
	}

	const handleClear = () => {
		clearExpression();
	}

	return (
		<div className={styles.contextmenu} style={{left: x, top: y}}>
			<div 
				data-testid="past"
				onClick={handlePaste}
				className={styles.item} 
			>
				Вставить
			</div>
			<div
				data-testid="clear" 
				onClick={handleClear}
				className={styles.item} 
			>
				Очистить
			</div>
			<div className={styles.item}>
				...
			</div>
		</div>
	)
}

export {ContextMenu};