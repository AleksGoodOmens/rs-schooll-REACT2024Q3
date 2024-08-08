// fetchData.ts
import { wrapper } from '../store';
import {
	getCards,
	getCategories,
	getItem,
	getRunningQueriesThunk,
} from '../store/services/starWarsApi';

export const fetchData = wrapper.getServerSideProps((store) => async (ctx) => {
	await store.dispatch(getCategories.initiate(''));

	const activeCat = ctx.query.category;
	const page = ctx.query.page || '1';
	const search = ctx.query.search || '';
	const id = ctx.query.id;

	if (activeCat && page) {
		await store.dispatch(
			getCards.initiate({
				category: activeCat as string,
				page: page as string,
				searchValue: search as string,
			}),
		);
	}

	if (id) {
		await store.dispatch(
			getItem.initiate({ category: activeCat as string, id: id as string }),
		);
	}

	await Promise.all(store.dispatch(getRunningQueriesThunk()));

	return {
		props: {},
	};
});
