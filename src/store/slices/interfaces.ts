export type ICard = {
	url: string;
	name?: string;
	title?: string;
	favorite: boolean;
	id: string;
	category: string;
};

export type CardState = {
	cards: ICard[];
	favoriteCards: ICard[];
	totalPages: number;
	totalCards: number;
	page: number;
	searchValue: string;
};
