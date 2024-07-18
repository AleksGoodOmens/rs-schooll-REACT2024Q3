import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Tabs from './Tabs';
import * as api from '../../store/services/starWarsApi';

const mockStore = configureStore([]);
const store = mockStore({});

vi.mock('../services/api', () => ({
	useGetCategoriesQuery: vi.fn(),
}));

const mockDispatch = vi.fn();
vi.mock('../hooks', () => ({
	useAppDispatch: () => mockDispatch,
}));

describe.skip('Tabs', () => {
	it.only('renders loading state', () => {
		api.useGetCategoriesQuery.mockReturnValue({
			data: null,
			isError: false,
			isLoading: true,
		});

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Tabs />
				</MemoryRouter>
			</Provider>,
		);

		expect(screen.getByText('tabs Loading...')).toBeInTheDocument();
	});

	it('renders error state', () => {
		api.useGetCategoriesQuery.mockReturnValue({
			data: null,
			isError: true,
			isLoading: false,
		});

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Tabs />
				</MemoryRouter>
			</Provider>,
		);

		expect(screen.getByText('something go wrong')).toBeInTheDocument();
	});

	it('renders data correctly', () => {
		const categories = ['category1', 'category2', 'category3'];
		api.useGetCategoriesQuery.mockReturnValue({
			data: categories,
			isError: false,
			isLoading: false,
		});

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Tabs />
				</MemoryRouter>
			</Provider>,
		);

		categories.forEach((category) => {
			expect(screen.getByText(category)).toBeInTheDocument();
		});
	});

	it('dispatches actions on category click', () => {
		const categories = ['category1', 'category2', 'category3'];
		api.useGetCategoriesQuery.mockReturnValue({
			data: categories,
			isError: false,
			isLoading: false,
		});

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Tabs />
				</MemoryRouter>
			</Provider>,
		);

		const categoryLink = screen.getByText('category1');
		fireEvent.click(categoryLink);

		expect(mockDispatch).toHaveBeenCalledWith({ type: 'resetPage' });
		expect(mockDispatch).toHaveBeenCalledWith({
			type: 'setSearchValue',
			payload: '',
		});
		expect(mockDispatch).toHaveBeenCalledWith({
			type: 'setActiveCategory',
			payload: 'category1',
		});
	});
});
