import { ChangeEvent, FunctionComponent } from 'react';
import { ICard } from '../../store/slices/interfaces';
import { useAppDispatch } from '../../store/hooks/hooks';
import {
	addToFavorite,
	delFromFavorite,
	setActiveCard,
} from '../../store/slices/cards.slice';

import styles from './styles.module.css';
import classNames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';

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
	const navigate = useNavigate();
	const { activeCategory } = useParams();
	const { name, url, title } = card;

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
		if (isActive) {
			dispatch(setActiveCard(null));
			navigate(`/${activeCategory}` || '/');
			return;
		}
		dispatch(setActiveCard(card));
		navigate(card.id);
	};

	return (
		<article
			key={url}
			className={classNames('fadeIn', styles['item'])}
		>
			<span>{name || title}</span>
			<div className={styles['controls']}>
				<button
					className={`fadeIn ${styles['button']} ${isActive ? styles['active'] : ''}`}
					onClick={handleToggleDetails}
					key={url}
				>
					<span>{!isActive ? 'Open details' : 'close details'}</span>
				</button>

				<label
					className={`fadeIn ${styles['label']} ${isInFavorite ? styles['active'] : ''}`}
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
