import React from 'react';
import { Display } from '../Display';
import { Keyboard } from '../Keyboard';
import styles from './calculator.css';

function Calculator() {
	return (
		<div className={styles.calculator}>
			<Display />
			<Keyboard />
		</div>
	)
}

export {Calculator};