import { Cards, Pagination } from '../../components';
import { cardsConverter } from '../../utils';
import { fetchCards } from './actions';

interface CategoryPageProps {
	params: { category: string };
	searchParams: { page: string; search: string };
}

export default async function CategoryPage({
	params,
	searchParams,
}: CategoryPageProps) {
	const category = params.category || 'people';
	const page = searchParams?.page || '1';
	const search = searchParams?.search || '';
	const cardsData = await fetchCards({ category, page, search });

	if (!cardsData) return <div>error</div>;

	const cardsWithIdAndCategory = cardsConverter(cardsData.results);

	return (
		<>
			<Pagination
				category={category}
				page={page}
				search={search}
				count={cardsData.count}
			/>
			<Cards cards={cardsWithIdAndCategory} />
		</>
	);
}
{
	/* {favoriteCards.length ? <Downloader /> : ''} */
} //todo
