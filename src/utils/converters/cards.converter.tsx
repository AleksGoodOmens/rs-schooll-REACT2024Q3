import { IDetailedCard } from '../../types';
import { getCategoryAndIdFromUrl } from '../helpers/getCategoryAndIdFromUrl';

export const cardsConverter = (cards: IDetailedCard[]) => {
	return cards.map((card) => {
		const categoryAndId = getCategoryAndIdFromUrl(card.url);
		return { ...card, ...categoryAndId };
	});
};
