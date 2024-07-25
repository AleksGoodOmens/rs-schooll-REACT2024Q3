import { ChangeEvent, FunctionComponent } from 'react';
import { ICard } from '../../store/slices/interfaces';
import { useAppDispatch } from '../../store/hooks/hooks';
import {
	addToFavorite,
	delFromFavorite,
	setActiveCard,
} from '../../store/slices/cards.slice';

import styles from './styles.module.css';

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

	const { name, url, title } = card;

	const handleAddOrDeleteFavorite = (
		e: ChangeEvent<HTMLInputElement>,
		card: ICard,
	) => {
		if (e.target.checked) {
			return dispatch(addToFavorite(card));
		}
		dispatch(delFromFavorite(card.url));
	};

	return (
		<article
			key={url}
			className={`fadeIn ${styles['item']} ${isActive ? styles['active'] : ''}`}
		>
			<button
				onClick={() => dispatch(setActiveCard(card))}
				key={url}
			>
				<span>{name || title}</span>
				<span>{!isActive ? 'Open details' : 'close details'}</span>
			</button>
			{!isActive && (
				<label>
					{isInFavorite ? 'remove from favorite' : 'add to favorite'}
					<input
						type="checkbox"
						checked={isInFavorite}
						onChange={(e) => handleAddOrDeleteFavorite(e, card)}
					/>
				</label>
			)}
		</article>
	);
};

export default Card;
