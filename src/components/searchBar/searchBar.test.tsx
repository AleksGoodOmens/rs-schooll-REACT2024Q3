import {
	describe,
	expect,
	it,
	beforeAll,
	afterAll,
	afterEach,
	beforeEach,
} from 'vitest';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from './SearchBar';
import { setSearchValue, setActiveItem } from '../../store/slices/slices';
import { server } from '../../test/msw/server';

// Создаем mock store
const mockStore = configureStore();

const initialState = {
	categoriesReducer: {
		searchValue: 'luke',
		activeCategory: 'category1',
	},
};

const store = mockStore(initialState);

// Настройка сервера msw перед тестами
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('SearchBar', () => {
	const user = userEvent.setup();

	beforeEach(() => {
		render(
			<Provider store={store}>
				<Router>
					<SearchBar />
				</Router>
			</Provider>,
		);
	});
	afterEach(cleanup);

	it('Should render search input', () => {
		const searchInput = screen.getByRole('searchbox', { name: /search/i });
		expect(searchInput).toBeInTheDocument();
	});

	it('Search value from props displayed in search input', () => {
		const searchInput = screen.getByRole('searchbox', { name: /search/i });
		expect(searchInput).toHaveValue('luke');
	});

	it('User can input new value', async () => {
		const searchInput = screen.getByRole('searchbox', { name: /search/i });
		await user.type(searchInput, '! i am your father!');
		expect(searchInput).toHaveValue('luke! i am your father!');
	});

	it('On submit it passed correct value', async () => {
		const searchInput = screen.getByRole('searchbox', { name: /search/i });
		const submitButton = screen.getByRole('button', { name: 'Search' });

		expect(searchInput).toHaveValue('luke');

		await user.clear(searchInput);
		await user.type(searchInput, 'Leia');
		fireEvent.submit(submitButton);

		const actions = store.getActions();
		expect(actions).toContainEqual(setSearchValue('leia'));
		expect(actions).toContainEqual(setActiveItem(undefined));
	});
});
