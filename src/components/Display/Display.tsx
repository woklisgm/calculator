import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './display.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';

function Display() {
	const {result, expression, counter, error} = useTypedSelector(state => state);
	const [chatter, setChatter] = useState(false);

	useEffect(() => {
		if (error === '') {
			return;
		}
		setChatter(true);
		setTimeout(() => {
			setChatter(false);
		}, 250)
	}, [counter, error]);

	const expressionClass = classNames({
		[styles.error]: error,
		[styles.chatter]: chatter
	})

	return (
		<div className={styles.display} data-testid="display">
			<div className={styles.expression}>
				<span 
					className={expressionClass}
					data-testid="expression" 
				>
					{expression ? expression : ''}<i/>
				</span>
			</div>
			<div className={styles.result} data-testid="result">
				{result ? result : 0}
			</div>
		</div>
	);
}

export {Display};