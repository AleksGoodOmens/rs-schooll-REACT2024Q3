import { Cards, Pagination, SearchBar } from '../../components';
import { fetchCards } from './actions';

import styles from './styles.module.css';

interface CategoryPageProps {
	params: { category: string };
	searchParams: { page: string; search: string };
}

export default async function CategoryPage({
	params,
	searchParams,
}: CategoryPageProps) {
	const category = params.category || 'people';
	const page = searchParams.page || '1';
	const search = searchParams.search || '';
	const cardsData = await fetchCards({ category, page, search });

	if (!cardsData) return <div>error</div>;

	return (
		<>
			<SearchBar />
			<Pagination
				category={category}
				page={page}
				search={search}
				count={cardsData.count}
			/>
			<section className={styles['items']}>
				<Cards cards={cardsData?.results} />
			</section>
		</>
	);
}
{
	/* {favoriteCards.length ? <Downloader /> : ''} */
} //todo
