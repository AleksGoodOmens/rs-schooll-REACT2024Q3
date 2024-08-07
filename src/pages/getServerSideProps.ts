import { wrapper } from '../store';
import {
	getRunningQueriesThunk,
	starWarsApi,
} from '../store/services/starWarsApi';

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async () => {
		const { getCategories } = starWarsApi.endpoints;
		const result = await store.dispatch(getCategories.initiate(''));

		if (result.error) {
			return {
				notFound: true,
			};
		}

		await Promise.all(store.dispatch(getRunningQueriesThunk()));

		return {
			props: {},
		};
	},
);
