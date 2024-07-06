interface IEmptyProp {
	props: Record<string, never>
}
interface IPeopleItem {
	name: string
	height: string
	mass: string
	hair_color: string
	skin_color: string
	eye_color: string
	birth_year: string
	gender: string
}

interface IAppState {
	data: IPeopleItem[]
	searchValue: string
	isLoading: boolean
	fade: Animations
}

type Animations = 'fadeIn' | 'fadeOut' | ''

interface ISearchBarState {
	searchValue: string
}

interface ISearchBarProp extends ISearchBarState {
	changeItems: (value: string) => Promise<void>
}

interface ApiResponse {
	results: IPeopleItem[]
}

export type {
	IEmptyProp,
	IPeopleItem,
	IAppState,
	Animations,
	ISearchBarState,
	ISearchBarProp,
	ApiResponse,
}
