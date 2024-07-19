import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import styles from './styles.module.css';

import starWarsApi from '../../store/services/starWarsApi';
import { useEffect } from 'react';
import {
	setCards,
	setActiveCard,
	setNext,
	setPrevious,
	setTotalPages,
} from '../../store/slices/cards.slice';
import Loader from '../loader/loader';
import Pagination from '../pagination/Pagination';

const { useGetCardsQuery } = starWarsApi;
const Cards = () => {
	const dispatch = useAppDispatch();
	const { activeCategory } = useAppSelector((state) => state.category);
	const { cards, page, searchValue, activeCard } = useAppSelector(
		(state) => state.cards,
	);
	const { data, isError, isLoading } = useGetCardsQuery({
		category: activeCategory,
		page: page,
		searchValue: searchValue,
	});

	const handleHideActiveCard = () => {
		if (activeCard) dispatch(setActiveCard(null));
	};

	useEffect(() => {
		if (data) {
			const { results, count, next, previous } = data;

			dispatch(setCards(results));
			dispatch(setTotalPages(count));
			dispatch(setNext(!!next));
			dispatch(setPrevious(!!previous));
		}
	}, [data, dispatch]);

	return (
		<div onClick={handleHideActiveCard}>
			<Pagination />
			{isLoading && <Loader />}

			{isError && <div>Something go wrong </div>}

			{!isLoading && !isError && (
				<section className={`fadeIn ${styles['items']}`}>
					{cards.length ? (
						cards.map((card) => {
							const { name, url, favorite, title } = card;
							return (
								<button
									onClick={() => dispatch(setActiveCard(card))}
									className={`fadeIn ${styles['item']} ${card.id === activeCard?.id ? styles['active'] : ''}`}
									key={url}
								>
									{name || title} {favorite ? 'lovely' : ''}
								</button>
							);
						})
					) : (
						<div>no items founded</div>
					)}
				</section>
			)}
		</div>
	);
};

export default Cards;
