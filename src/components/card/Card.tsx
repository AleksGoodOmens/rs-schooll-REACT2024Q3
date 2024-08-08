import { ChangeEvent, FunctionComponent } from 'react';
import { ICard } from '../../store/slices/interfaces';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { addToFavorite, delFromFavorite } from '../../store/slices/cards.slice';

import styles from './styles.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { cardSelector } from '../../store/slices/selectors';

interface CardProps {
	card: ICard;
}

const Card: FunctionComponent<CardProps> = ({ card }) => {
	const dispatch = useAppDispatch();

	const { favoriteCards } = useAppSelector(cardSelector);

	const router = useRouter();

	const { category, page, search } = router.query;

	const { name, url, title, id } = card;

	const isActive = id === router.query.id;

	const isInFavorite = favoriteCards.findIndex((item) => item.id === id) !== -1;

	const handleToggleFavorite = (
		e: ChangeEvent<HTMLInputElement>,
		card: ICard,
	) => {
		if (e.target.checked) {
			return dispatch(addToFavorite(card));
		}
		dispatch(delFromFavorite(card.url));
	};

	const handleToggleDetails = () => {
		if (!isActive) {
			router.push(
				`/${category}/${id || ''}?page=${page}&search=${search || ''}`,
			);

			return;
		}
		router.push(`/${category}?page=${page}&search=${search || ''}`);
	};

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
					onClick={handleToggleDetails}
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
						checked={isInFavorite}
						onChange={(e) => handleToggleFavorite(e, card)}
					/>
				</label>
			</div>
		</article>
	);
};

export default Card;
