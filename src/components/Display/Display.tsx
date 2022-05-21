import React from 'react';
import styles from './display.css';

function Display() {

	return (
		<div className={styles.display}>
			<div className={styles.expression}>
				<span>1</span>
			</div>
			<div className={styles.result}>
				2
			</div>
		</div>
	);
}

export {Display};