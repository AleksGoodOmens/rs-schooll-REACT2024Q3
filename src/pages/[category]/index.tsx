import { ReactNode } from 'react';

import styles from './styles.module.css';
import NavCategories from '../../components/navCategories/NavCategories';
import SearchBar from '../../components/searchBar/SearchBar';
import Pagination from '../../components/pagination/Pagination';
import Cards from '../../components/cards/Cards';
import { useRouter } from 'next/router';
import Banner from '../../components/banner/Banner';
import { CardsResponse } from '../../store/services/interface';
import { getCategoryAndIdFromUrl } from '../../utils/getCategoryAndIdFromUrl';
import Downloader from '../../components/downloader/Downloader';
import { useAppSelector } from '../../store/hooks/hooks';
import { cardSelector } from '../../store/slices/selectors';
import { fetchData } from '../../utils/fetchSSR';
import {
	useGetCardsQuery,
	useGetCategoriesQuery,
} from '../../store/services/starWarsApi';
import { skipToken } from '@reduxjs/toolkit/query';

export const getServerSideProps = fetchData;

export default function Category({ children }: { children: ReactNode }) {
	const router = useRouter();
	const { favoriteCards } = useAppSelector(cardSelector);

	const { category, page, search } = router.query;

	const searchParametersControl = () => {
		return {
			category: (category as string) || 'people',
			page: (page as string) || '1',
			searchValue: (search as string) || '',
		};
	};

	const categoriesData = useGetCategoriesQuery('');

	const cardsData = useGetCardsQuery(searchParametersControl() ?? skipToken);

	const { count, results } = cardsData.data as CardsResponse;

	const transformedCards = results.map((card) => {
		const categoryAndId = getCategoryAndIdFromUrl(card.url);

		return { ...card, ...categoryAndId, favorite: false };
	});

	return (
		<>
			<NavCategories
				active={category as string}
				categories={categoriesData.data}
			/>
			<SearchBar />
			<Pagination
				count={count}
				page={(page as string) || '1'}
			/>
			<section className={styles['items']}>
				{cardsData.data ? (
					<Cards cards={transformedCards} />
				) : (
					<Banner>something go wrong</Banner>
				)}
				{children}
			</section>

			{favoriteCards.length ? <Downloader /> : ''}
		</>
	);
}
