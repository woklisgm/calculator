import React from 'react';

import styles from './app.css';
import { Calculator } from './components/Calculator';
// import './fonts/Geometria/stylesheet.css';

function App() {

	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<Calculator />
			</div>
		</div>
	);
}

export default App;
