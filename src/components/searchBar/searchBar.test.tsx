import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ue from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
	const expectedValue = 'luke';

	const user = ue.setup();

	const setSearchValue = vi.fn();

	render(
		<Router>
			<SearchBar
				category="people"
				searchValue={expectedValue}
				setSearchValue={setSearchValue}
			/>
			,
		</Router>,
	);
	const searchInput = screen.getByRole('searchbox', { name: /search/i });
	const submitButton = screen.getByRole('button', { name: 'Search' });

	it('Should render search input', () => {
		expect(searchInput).toBeInTheDocument();
	});
	it('Search value from props displayed in search input ', () => {
		expect(searchInput).toHaveValue(expectedValue);
	});
	it('User can input new value ', async () => {
		await user.type(searchInput, '! i am your father!');
		expect(searchInput).toHaveValue('luke! i am your father!');
	});

	it('On submit it passed correct value ', async () => {
		expect(setSearchValue).not.toBeCalled();
		await user.click(submitButton);
		expect(setSearchValue).toHaveBeenCalledWith('luke! i am your father!');
	});
});
