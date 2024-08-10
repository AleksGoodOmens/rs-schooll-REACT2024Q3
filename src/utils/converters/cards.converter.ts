import { IDetailedCard } from '../../types';
import { getCategoryAndIdFromUrl } from '../helpers/getCategoryAndIdFromUrl';

export const cardsConverter = (cards: IDetailedCard[]) => {
	return cards.map((card) => {
		const { category, id } = getCategoryAndIdFromUrl(card.url);
		return {
			name: card.name || '',
			title: card.title || '',
			url: card.url || '',
			category: category || '',
			id: id || '',
		};
	});
};
