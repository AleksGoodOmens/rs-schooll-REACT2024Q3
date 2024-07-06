import { Component } from 'react';

import styles from './styles.module.css';
import { IEmptyProp } from '../../interfaces/interfaces';

class Loader extends Component<IEmptyProp> {
	constructor(props: IEmptyProp) {
		super(props);
	}

	render() {
		return (
			<div className={`${styles.box} fadeIn`}>
				<h2>Loading...</h2>
				<div className={styles.img}></div>
			</div>
		);
	}
}

export default Loader;
