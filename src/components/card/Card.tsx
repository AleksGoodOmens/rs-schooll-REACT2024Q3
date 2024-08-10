import { FunctionComponent } from 'react';

import styles from './styles.module.css';
import classNames from 'classnames';
import { IDetailedCard } from '../../types';
// import { useRouter } from 'next/navigation';

interface ICardProps {
	card: IDetailedCard;
}

export const Card: FunctionComponent<ICardProps> = ({ card }) => {
	// const router = useRouter();

	// const { category, page, search } = router.query; //todo

	const { name, url, title } = card;

	// const isActive = id === router.query.id; // todo

	// const isInFavorite = favoriteCards.findIndex((item) => item.id === id) !== -1; //todo

	// const handleToggleFavorite = (
	// 	e: ChangeEvent<HTMLInputElement>,
	// 	card: ICard,
	// ) => {
	// 	if (e.target.checked) {
	// 		return dispatch(addToFavorite(card));
	// 	}
	// 	dispatch(delFromFavorite(card.url));
	// }; //todo

	// const handleToggleDetails = () => {
	// 	if (!isActive) {
	// 		router.push(
	// 			`/${category}/${id || ''}?page=${page}&search=${search || ''}`,
	// 		);

	// 		return;
	// 	}
	// 	router.push(`/${category}?page=${page}&search=${search || ''}`);
	// }; //todo

	const isActive = false;
	const isInFavorite = false;

	return (
		<article
			key={url}
			className={classNames(
				'fadeIn',
				styles['item'],
				isActive && styles['active'],
			)}
		>
			<span className={styles['title']}>{name || title}</span>
			<div className={styles['controls']}>
				<button
					className={`fadeIn ${styles['button']} ${
						isActive ? styles['active'] : ''
					}`}
					// onClick={handleToggleDetails}
					key={url}
				>
					{!isActive ? 'Open details' : 'close details'}
				</button>

				<label
					className={`fadeIn ${styles['label']} ${
						isInFavorite ? styles['active'] : ''
					}`}
				>
					{isInFavorite ? 'del from favorite' : 'add to favorite'}
					<input
						type="checkbox"
						// checked={isInFavorite}
						// onChange={(e) => handleToggleFavorite(e, card)}
					/>
				</label>
			</div>
		</article>
	);
};
