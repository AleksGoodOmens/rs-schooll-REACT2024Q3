'use client';
import { useState } from 'react';

import styles from './styles.module.css';
import Sure from './Sure';
import UnSure from './UnSure';
export const Downloader = () => {
	const [sure, setSure] = useState(false);

	return (
		<div className={styles['popup']}>
			{sure ? <Sure setSure={setSure} /> : <UnSure setSure={setSure} />}
		</div>
	);
};
