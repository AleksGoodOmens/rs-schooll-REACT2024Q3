'use client';
import { useState } from 'react';

import styles from './styles.module.css';
import Sure from './Sure';
import UnSure from './UnSure';
import { cardSelector, useAppSelector } from '../../store';
export const Downloader = () => {
	const [sure, setSure] = useState(false);

	const { favoriteCards } = useAppSelector(cardSelector);

	if (!favoriteCards.length) return <></>;

	return (
		<div className={styles['popup']}>
			{sure ? <Sure setSure={setSure} /> : <UnSure setSure={setSure} />}
		</div>
	);
};
