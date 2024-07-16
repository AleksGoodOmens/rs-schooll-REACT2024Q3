import { ReactNode } from 'react';

interface IResultObject<T> {
	results: T[];
}

interface IPeopleItem {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	id: number;
}

interface IAppState {
	data: IPeopleItem[];
	searchValue: string;
	isLoading: boolean;
	fade: Animations;
}

type Animations = '' | 'fadeOut' | '';

interface ISearchBarState {
	searchValue: string;
}

interface ISearchBarProp extends ISearchBarState {
	changeItems: (value: string) => Promise<void>;
}

interface ApiResponse {
	results: IPeopleItem[];
}

interface IResultProps {
	fade: Animations;
	data: IPeopleItem[];
}

interface IErrorTriggerState {
	isError: boolean;
	button: 'Wrong button' | 'Throw an error';
}

interface IErrorBoundaryProps {
	children: ReactNode;
}

interface IErrorBoundaryState {
	hasError: boolean;
}

interface IErrorFallBackState {
	hasError: boolean;
}
interface IPerson {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	created: string;
	edited: string;
	url: string;
}

interface IPlanet {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;

	created: string;
	edited: string;
	url: string;
}

interface IFilm {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	created: string;
	edited: string;
	url: string;
}

interface ISpice {
	name: string;
	classification: string;
	designation: string;
	average_height: string;
	skin_colors: string;
	hair_colors: string;
	eye_colors: string;
	average_lifespan: string;
	homeworld: string | null;
	language: string;
	created: string;
	edited: string;
	url: string;
}

interface IVehicle {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	vehicle_class: string;
	created: string;
	edited: string;
	url: string;
}

interface IStarship {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	hyperdrive_rating: string;
	MGLT: string;
	starship_class: string;
	created: string;
	edited: string;
	url: string;
}

export type {
	IVehicle,
	IStarship,
	ISpice,
	IFilm,
	IPlanet,
	IPerson,
	IResultObject,
	IPeopleItem,
	IAppState,
	Animations,
	ISearchBarState,
	ISearchBarProp,
	ApiResponse,
	IResultProps,
	IErrorTriggerState,
	IErrorBoundaryProps,
	IErrorBoundaryState,
	IErrorFallBackState,
};
