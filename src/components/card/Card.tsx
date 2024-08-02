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
import Link from 'next/link';
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
		if (isActive) {
			dispatch(setActiveCard(null));
			return;
		}
		dispatch(setActiveCard(card));
	};

	return (
		<article
			key={url}
			className={classNames('fadeIn', styles['item'])}
		>
			<span>{name || title}</span>
			<div className={styles['controls']}>
				<Link
					href={`/${category}/${id}`}
					className={`fadeIn ${styles['button']} ${
						isActive ? styles['active'] : ''
					}`}
					onClick={handleToggleDetails}
					key={url}
				>
					<span>{!isActive ? 'Open details' : 'close details'}</span>
				</Link>

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
