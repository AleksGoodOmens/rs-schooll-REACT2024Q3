import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import styles from './styles.module.css';

import starWarsApi from '../../store/services/starWarsApi';
import { useEffect } from 'react';
import { setCards, setActiveCard } from '../../store/slices/cards.slice';

const { useGetCardsQuery } = starWarsApi;
const Cards = () => {
	const dispatch = useAppDispatch();

	// const { data, isError, isLoading, isFetching } = useGetCardsQuery({
	// 	category: activeCategory,
	// 	page: page,
	// 	searchValue: searchValue,
	// });

	const handleHideActiveCard = () => {
		dispatch(setActiveCard(null));
	};

	// useEffect(() => {
	// 	if (data) {
	// 		dispatch(setCards(data));
	// 		if (searchValue)
	// 			return setSearchParams({
	// 				search: searchValue,
	// 				page: page.toString(),
	// 			});
	// 		setSearchParams({
	// 			page: page.toString(),
	// 		});
	// 	}
	// }, [data, dispatch, searchValue, setSearchParams, page]);

	return <h1>category cards</h1>;
};
// <>
// 	{!activeCard && <Pagination />}
// 	{(isLoading || isFetching) && <Loader />}

// 	{isError && <Banner>Something go wrong </Banner>}

// 	{cards && !isLoading && !isFetching && (
// 		<section className={styles['content']}>
// 			<section
// 				className={`fadeIn ${styles['items']}`}
// 				onClick={handleHideActiveCard}
// 			>
// 				{cards.length === 0 && <Banner>Nothing found</Banner>}

// 				{cards.map((card) => (
// 					<Card
// 						key={card.url}
// 						card={card}
// 						isInFavorite={
// // 							!!favoriteCards.find((item) => item.url === card.url)
// 						}
// 						isActive={card.id === activeCard?.id}
// 					/>
// 				))}
// 			</section>
// 			<Outlet />
// 		</section>
// 	)}
// </>

export default Cards;
