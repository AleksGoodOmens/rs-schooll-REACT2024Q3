'use client';
import { FunctionComponent } from 'react';
import classNames from 'classnames';

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

import { ICard } from '../../types';
import styles from './styles.module.css';
interface ICardProps {
	card: ICard;
}

export const Card: FunctionComponent<ICardProps> = ({ card }) => {
	const page = useSearchParams().get('page');
	const params = useParams();
	const search = useSearchParams().get('search');

	// const { category, page, search } =  //todo

	const { name, url, title, id } = card;

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
	const isActive = id === params.id;
	const isInFavorite = false;

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
						// checked={isInFavorite}
						// onChange={(e) => handleToggleFavorite(e, card)}
					/>
				</label>
			</div>
		</article>
	);
};
