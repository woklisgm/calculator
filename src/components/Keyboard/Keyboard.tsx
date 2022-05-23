import React from 'react';

import styles from './keyboard.css';
import {keyboard} from '../../constants/keyboard';
import { useActions } from '../../hooks/useActions';

function Keyboard() {
	const {checkKey} = useActions();

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const el = e.target as HTMLDivElement;
		const key = el.dataset.char ? el.dataset.char : 
			el.parentElement?.dataset.char ? el.parentElement?.dataset.char : null;
		if (key) {
			checkKey(key);
		}
	}

	return (
		<div className={styles.keyboard} onClick={handleClick} data-testid="keyboard">
			{keyboard.map((char, i) => 
				<div 
				 	key={char}
					className={styles.btn}
					data-testid="keyboard-btn"
					data-char={char}
				>
					<div>
						{char}
					</div>
				</div>
			)}
		</div>
	);
}

export {Keyboard};