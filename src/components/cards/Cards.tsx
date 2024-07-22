import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import styles from './styles.module.css';

import starWarsApi from '../../store/services/starWarsApi';
import { ChangeEvent, useEffect } from 'react';
import {
	setCards,
	setActiveCard,
	addToFavorite,
	delFromFavorite,
	Card,
} from '../../store/slices/cards.slice';
import Loader from '../loader/loader';
import Pagination from '../pagination/Pagination';

const { useGetCardsQuery } = starWarsApi;
const Cards = () => {
	const dispatch = useAppDispatch();

	const { activeCategory } = useAppSelector((state) => state.category);
	const { cards, page, searchValue, activeCard, favoriteCards } =
		useAppSelector((state) => state.cards);
	const { data, isError, isLoading, isFetching } = useGetCardsQuery({
		category: activeCategory,
		page: page,
		searchValue: searchValue,
	});

	const handleHideActiveCard = () => {
		if (activeCard) dispatch(setActiveCard(null));
	};

	const handleAddOrDeleteFavorite = (
		e: ChangeEvent<HTMLInputElement>,
		card: Card,
	) => {
		if (e.target.checked) {
			return dispatch(addToFavorite(card));
		}
		dispatch(delFromFavorite(card.url));
	};

	useEffect(() => {
		if (data) {
			dispatch(setCards(data));
		}
	}, [data, dispatch]);

	return (
		<div onClick={handleHideActiveCard}>
			<Pagination />
			{isLoading || (isFetching && <Loader />)}

			{isError && <div>Something go wrong </div>}

			{!isLoading && !isError && !isFetching && (
				<section className={`fadeIn ${styles['items']}`}>
					{cards.length ? (
						cards.map((card) => {
							const { name, url, title } = card;

							const favorite = !!favoriteCards.find((item) => item.url === url);

							return (
								<div
									key={url}
									className={`fadeIn ${styles['item']} ${card.id === activeCard?.id ? styles['active'] : ''}`}
								>
									<button
										onClick={() => dispatch(setActiveCard(card))}
										key={url}
									>
										<b>{name || title}</b>
										<span>
											{!activeCard ? 'Open details' : 'close details'}
										</span>
									</button>
									{!activeCard && (
										<label>
											{favorite ? 'remove from favorite' : 'add to favorite'}
											<input
												type="checkbox"
												checked={favorite}
												onChange={(e) => handleAddOrDeleteFavorite(e, card)}
											/>
										</label>
									)}
								</div>
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
