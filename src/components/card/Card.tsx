import { ChangeEvent, FunctionComponent } from 'react';
import { ICard } from '../../store/slices/interfaces';
import { useAppDispatch } from '../../store/hooks/hooks';
import { addToFavorite, delFromFavorite } from '../../store/slices/cards.slice';

import styles from './styles.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';

interface CardProps {
	card: ICard;
	isInFavorite: boolean;
	isActive: boolean;
}

const Card: FunctionComponent<CardProps> = ({
	card,
	isInFavorite,
	isActive,
}) => {
	const dispatch = useAppDispatch();

	const router = useRouter();

	const { category } = router.query;

	const { name, url, title, id } = card;

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
			router.push(`/${category}/${id}`);

			return;
		}
		router.push(`/${category}`);
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
