import { CardsResponse } from '../../types';
import { BASE_URL } from '../../utils';

interface fetchCardsProps {
	search: string;
	page: string;
	category: string;
}

export const fetchCards = async ({
	search = '',
	page = '1',
	category = 'people',
}: fetchCardsProps): Promise<CardsResponse | undefined> => {
	try {
		const response = await fetch(
			`${BASE_URL}/${category}/?page=${page}${search ? '&search=' + search : ''}`,
		);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json: CardsResponse = await response.json();
		return json;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}
};
