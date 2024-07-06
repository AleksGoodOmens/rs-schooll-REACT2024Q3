import { ReactNode } from 'react'

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

interface IResultProps {
	fade: Animations
	data: IPeopleItem[]
}

interface IErrorTriggerState {
	isError: boolean
	button: 'Wrong button' | 'Throw an error'
}

interface IErrorBoundaryProps {
	children: ReactNode
}

interface IErrorBoundaryState {
	hasError: boolean
}

interface IErrorFallBackState {
	hasError: boolean
}

export type {
	IEmptyProp,
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
}
