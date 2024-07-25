import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import styles from './styles.module.css';

import starWarsApi from '../../store/services/starWarsApi';
import { useEffect } from 'react';
import { setCards, setActiveCard } from '../../store/slices/cards.slice';
import Loader from '../loader/loader';
import Pagination from '../pagination/Pagination';
import { cardSelector, categoriesSelector } from '../../store/slices/selectors';
import Card from '../card/Card';

const { useGetCardsQuery } = starWarsApi;
const Cards = () => {
	const dispatch = useAppDispatch();

	const { activeCategory } = useAppSelector(categoriesSelector);

	const { cards, page, searchValue, activeCard, favoriteCards } =
		useAppSelector(cardSelector);

	const { data, isError, isLoading, isFetching } = useGetCardsQuery({
		category: activeCategory,
		page: page,
		searchValue: searchValue,
	});

	const handleHideActiveCard = () => {
		if (activeCard) dispatch(setActiveCard(null));
	};

	useEffect(() => {
		if (data) {
			dispatch(setCards(data));
		}
	}, [data, dispatch]);

	return (
		<div onClick={handleHideActiveCard}>
			<Pagination />
			{(isLoading || isFetching) && <Loader />}

			{isError && <div>Something go wrong </div>}

			{!isLoading && !isError && !isFetching && (
				<section className={`fadeIn ${styles['items']}`}>
					{cards.length === 0 && <div>Nothing found</div>}

					{cards.map((card) => (
						<Card
							key={card.url}
							card={card}
							isInFavorite={
								!!favoriteCards.find((item) => item.url === card.url)
							}
							isActive={card.id === activeCard?.id}
						/>
					))}
				</section>
			)}
		</div>
	);
};

export default Cards;
