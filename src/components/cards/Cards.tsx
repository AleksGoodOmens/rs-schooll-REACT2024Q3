import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import styles from './styles.module.css';

import starWarsApi from '../../store/services/starWarsApi';
import { useEffect } from 'react';
import { setCards, setActiveCard } from '../../store/slices/cards.slice';
import Loader from '../loader/loader';
import Pagination from '../pagination/Pagination';
import { cardSelector, categoriesSelector } from '../../store/slices/selectors';
import Card from '../card/Card';
import Banner from '../banner/banner';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

const { useGetCardsQuery } = starWarsApi;
const Cards = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [, setSearchParams] = useSearchParams();

	const { activeCategory } = useAppSelector(categoriesSelector);

	const { cards, page, searchValue, activeCard, favoriteCards } =
		useAppSelector(cardSelector);

	const { data, isError, isLoading, isFetching } = useGetCardsQuery({
		category: activeCategory,
		page: page,
		searchValue: searchValue,
	});

	const handleHideActiveCard = () => {
		if (activeCard) {
			dispatch(setActiveCard(null));
			navigate(`/${activeCategory}`);
		}
	};

	useEffect(() => {
		if (data) {
			dispatch(setCards(data));
			if (searchValue)
				return setSearchParams({
					search: searchValue,
					page: page.toString(),
				});
			setSearchParams({
				page: page.toString(),
			});
		}
	}, [data, dispatch, searchValue, setSearchParams, page]);

	return (
		<>
			{!activeCard && <Pagination />}
			{(isLoading || isFetching) && <Loader />}

			{isError && <Banner>Something go wrong </Banner>}

			{cards && !isLoading && !isFetching && (
				<section className={styles['content']}>
					<section
						className={`fadeIn ${styles['items']}`}
						onClick={handleHideActiveCard}
					>
						{cards.length === 0 && <Banner>Nothing found</Banner>}

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
					<Outlet />
				</section>
			)}
		</>
	);
};

export default Cards;
