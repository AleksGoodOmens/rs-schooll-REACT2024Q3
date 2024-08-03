import { useRouter } from 'next/router';
import { useEffect } from 'react';

import styles from './styles.module.css';
import Downloader from '../downloader/Downloader';
import starWarsApi from '../../store/services/starWarsApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { cardSelector } from '../../store/slices/selectors';
import { setCards } from '../../store/slices/cards.slice';
import Loader from '../loader/loader';
import Banner from '../banner/banner';
import Card from '../card/Card';
const { useGetCardsQuery } = starWarsApi;
const Cards = () => {
	const dispatch = useAppDispatch();

	const router = useRouter();

	const { category, id } = router.query as { category: string; id: string };

	const { page, searchValue, cards, favoriteCards } =
		useAppSelector(cardSelector);

	const { data, isError, isLoading, isFetching } = useGetCardsQuery({
		category: category,
		page: page,
		searchValue: searchValue,
	});

	useEffect(() => {
		if (data) {
			dispatch(setCards(data));
		}
	}, [data, dispatch, searchValue, page, category]);

	return (
		<>
			{(isLoading || isFetching) && <Loader />}

			{isError && <Banner>Something go wrong </Banner>}

			{cards && !isLoading && !isFetching && (
				<section className={`fadeIn ${styles['items']}`}>
					{cards.length === 0 && <Banner>Nothing found</Banner>}

					{cards.map((card) => (
						<Card
							key={card.url}
							card={card}
							isInFavorite={
								!!favoriteCards.find((item) => item.url === card.url)
							}
							isActive={card.id === id}
						/>
					))}
				</section>
			)}
			{favoriteCards.length !== 0 && <Downloader />}
		</>
	);
};

export default Cards;
