import starWarsApi from '@/store/services/starWarsApi';
import styles from './styles.module.css';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { setActiveCard, setCards } from '@/store/slices/cards.slice';
import { cardSelector, categoriesSelector } from '@/store/slices/selectors';
import { useParams, useSearchParams } from 'next/navigation';
import Pagination from '@/components/pagination/Pagination';
import Loader from '@/components/loader/loader';
import Banner from '@/components/banner/banner';
import Card from '@/components/card/Card';
import CategoryLayout from '@/components/categoryLayout/CategoryLayout';

const { useGetCardsQuery } = starWarsApi;
const Cards = () => {
	const dispatch = useAppDispatch();

	const { page, searchValue, cards, activeCard, favoriteCards } =
		useAppSelector(cardSelector);

	const { activeCategory } = useAppSelector(categoriesSelector);

	const { data, isError, isLoading, isFetching } = useGetCardsQuery({
		category: activeCategory,
		page: page,
		searchValue: searchValue,
	});

	const handleHideActiveCard = () => {
		dispatch(setActiveCard(null));
	};

	useEffect(() => {
		if (data) {
			dispatch(setCards(data));
		}
	}, [data, dispatch, searchValue, page]);

	return (
		<>
			<CategoryLayout>
				<>
					<Pagination />
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
						</section>
					)}
				</>
			</CategoryLayout>
		</>
	);
};

export default Cards;
