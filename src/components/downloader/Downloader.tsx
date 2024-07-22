import { CSVLink } from 'react-csv';
import { useState } from 'react';

import { clearFavoriteCards } from '../../store/slices/cards.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

import styles from './styles.module.css';
const Downloader = () => {
	const dispatch = useAppDispatch();
	const { favoriteCards } = useAppSelector((state) => state.cards);
	const [shure, setShure] = useState(false);

	const fileName = `${favoriteCards.length}-starWars_characters.csv`;

	return (
		<div className={styles['popup']}>
			{!shure && (
				<>
					<b>{favoriteCards.length}</b>
					<span>
						{favoriteCards.length > 1 ? 'cards are' : 'card is'} selected
					</span>
					<button onClick={() => setShure(true)}>Unselect all</button>{' '}
					<CSVLink
						className={styles['download']}
						data={favoriteCards}
						filename={fileName}
					>
						Download favorite
					</CSVLink>
				</>
			)}
			{shure && (
				<>
					<span>Are you shure?</span>
					<button onClick={() => dispatch(clearFavoriteCards())}>
						yes
					</button>{' '}
					<button onClick={() => setShure(false)}>no</button>
				</>
			)}
		</div>
	);
};

export default Downloader;
