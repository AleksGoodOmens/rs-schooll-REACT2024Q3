import { describe, expect, it, afterEach, beforeEach } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { renderWithProviders } from '../../test/test-utils';

describe('SearchBar', () => {
	const user = userEvent.setup();

	beforeEach(() => {
		renderWithProviders(<SearchBar />);
	});
	afterEach(() => cleanup());

	it('Should render search input', () => {
		const searchInput = screen.getByRole('searchbox', { name: /search/i });
		expect(searchInput).toBeInTheDocument();
	});

	it('User can input new value', async () => {
		const searchInput = screen.getByRole('searchbox', { name: /search/i });
		await user.type(searchInput, '! i am your father!');
		expect(searchInput).toHaveValue('! i am your father!');
	});

	it('Search input is cleared after submission', async () => {
		const searchInput = screen.getByRole('searchbox', { name: /search/i });
		const submitButton = screen.getByRole('button', { name: 'Search' });

		await user.type(searchInput, 'test');
		expect(searchInput).toHaveValue('test');

		await user.click(submitButton);

		expect(searchInput).toHaveValue('');
	});

	it('Checking if the search input is empty after an error message is shown', async () => {
		const submitButton = screen.getByRole('button', { name: 'Search' });

		await user.click(submitButton);

		expect(screen.getByText('Please enter a search term')).toBeInTheDocument();
		expect(screen.getByRole('searchbox', { name: /search/i })).toHaveValue('');
	});
});
