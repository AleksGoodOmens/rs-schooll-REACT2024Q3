export interface CategoriesResponse {
	[key: string]: string;
}
export interface ICard {
	url: string;
	name?: string;
	title?: string;
	favorite: boolean;
	id: string;
	category: string;
}
export interface CardsResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: ICard[];
	message?: string;
}

//todo maybe should be deleted
export interface ItemResponse {
	[key: string]: string | number | [];
}

export interface IDetailedCard {
	title?: string;
	name?: string;
	height?: string;
	mass?: string;
	hair_color?: string;
	skin_color?: string;
	eye_color?: string;
	birth_year?: string;
	gender?: string;
	rotation_period?: string;
	orbital_period?: string;
	diameter?: string;
	climate?: string;
	gravity?: string;
	terrain?: string;
	surface_water?: string;
	population?: string;
	classification?: string;
	designation?: string;
	average_height?: string;
	skin_colors?: string;
	hair_colors?: string;
	eye_colors?: string;
	average_lifespan?: string;
	language?: string;
	vehicle_class?: string;
	model?: string;
	manufacturer?: string;
	cost_in_credits?: string;
	length?: string;
	crew?: string;
	passengers?: string;
	cargo_capacity?: string;
	consumables?: string;
	starship_class?: string;
	created?: string;
	edited?: string;
	url: string;
}
