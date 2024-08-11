'use client';
import { ChangeEvent, FunctionComponent } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import classNames from 'classnames';

import { ICard } from '../../types';

import {
	addToFavorite,
	cardSelector,
	delFromFavorite,
	useAppDispatch,
	useAppSelector,
} from '../../store';

import styles from './styles.module.css';
interface ICardProps {
	card: ICard;
}

export const Card: FunctionComponent<ICardProps> = ({ card }) => {
	const params = useParams();
	const page = useSearchParams().get('page');
	const search = useSearchParams().get('search');

	const dispatch = useAppDispatch();

	const { favoriteCards } = useAppSelector(cardSelector);

	const { name, url, title, id } = card;

	const isInFavorite = favoriteCards.findIndex((item) => item.id === id) !== -1;

	const handleToggleFavorite = (
		e: ChangeEvent<HTMLInputElement>,
		card: ICard,
	) => {
		if (e.target.checked) {
			return dispatch(addToFavorite(card));
		}
		dispatch(delFromFavorite(card.url));
	}; //todo

	const isActive = id === params.id;

	const correctPath = `/${params.category}/${params.id ? '' : id}?page=${page}${search ? `&search=${search}` : ''}`;

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
				<Link
					href={correctPath}
					className={`fadeIn ${styles['button']} ${
						isActive ? styles['active'] : ''
					}`}
					key={url}
				>
					{!isActive ? 'Open details' : 'close details'}
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
