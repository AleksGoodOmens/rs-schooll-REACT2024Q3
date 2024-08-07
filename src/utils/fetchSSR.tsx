// fetchData.ts
import { wrapper } from '../store';
import {
	getRunningQueriesThunk,
	starWarsApi,
} from '../store/services/starWarsApi';

export const fetchData = wrapper.getServerSideProps((store) => async (ctx) => {
	const { getCategories, getCards, getItem } = starWarsApi.endpoints;

	const categoriesResult = await store.dispatch(getCategories.initiate(''));
	if (categoriesResult.error) {
		throw new Error('Failed to fetch categories');
	}

	const activeCat = ctx.query.category;
	const page = ctx.query.page || '1';
	const search = ctx.query.search || '';
	const id = ctx.query.id;

	if (activeCat) {
		const cardsResult = await store.dispatch(
			getCards.initiate({
				category: activeCat as string,
				page: page as string,
				searchValue: search as string,
			}),
		);
		if (cardsResult.error) {
			throw new Error('Failed to fetch cards');
		}
	}
	if (id) {
		const itemsResult = await store.dispatch(
			getItem.initiate({ category: activeCat as string, id: id as string }),
		);
		if (itemsResult.error) {
			throw new Error('Failed to fetch items');
		}
	}

	await Promise.all(store.dispatch(getRunningQueriesThunk()));

	return {
		props: {},
	};
});
