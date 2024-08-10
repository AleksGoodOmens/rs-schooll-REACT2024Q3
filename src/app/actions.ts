import { CategoriesResponse } from '../types';
import { BASE_URL, categoriesConverter } from '../utils';

export const fetchCategories = async () => {
	try {
		const response = await fetch(BASE_URL);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json: CategoriesResponse = await response.json();
		const categories = categoriesConverter(json || {});
		return categories;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
			return { message: 'categories fetch API problem' };
		}
	}
};
