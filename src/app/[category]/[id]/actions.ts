import { IDetailedCard } from '../../../types';
import { BASE_URL } from '../../../utils';

interface fetchDetailsProps {
	id: string;
	category: string;
}

export const fetchDetails = async ({
	id,
	category,
}: fetchDetailsProps): Promise<IDetailedCard | undefined> => {
	try {
		const response = await fetch(`${BASE_URL}/${category}/${id}`);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json: IDetailedCard = await response.json();

		return json;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}
};
