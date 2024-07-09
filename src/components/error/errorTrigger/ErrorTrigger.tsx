import { useState } from 'react';

import styles from './styles.module.css';

const ErrorTrigger = () => {
	const [state, setState] = useState({
		isError: false,
		button: 'Wrong button',
	});

	const throwError = () => {
		setState({ ...state, isError: !state.isError });
	};

	const changeTextMouseEnter = () => {
		setState({ isError: false, button: 'Throw an error' });
	};

	const changeTextMouseLeave = () => {
		setState({ isError: false, button: 'Wrong button' });
	};

	if (state.isError) {
		throw new Error('Triggered error');
	}

	return (
		<div className={styles.box}>
			<h1>Welcome to the Star wars character base</h1>
			<button
				onClick={throwError}
				onMouseEnter={changeTextMouseEnter}
				onMouseLeave={changeTextMouseLeave}
			>
				{state.button}
			</button>
		</div>
	);
};

export default ErrorTrigger;
