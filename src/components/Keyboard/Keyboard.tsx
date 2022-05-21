import React from 'react';

import styles from './keyboard.css';
import {keyboard} from '../../constants/keyboard';
import { validCharacters } from '../../constants/validCharacters';

function Keyboard() {
	return (
		<div className={styles.keyboard}>
			{keyboard.map((char, i) => 
				<div 
				 	key={char}
					className={styles.btn}
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