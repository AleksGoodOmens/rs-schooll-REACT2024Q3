'use client';
import { useState } from 'react';
import { cardSelector, useAppSelector } from '../../store';

import Sure from './Sure';
import UnSure from './UnSure';

import styles from './styles.module.css';
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
