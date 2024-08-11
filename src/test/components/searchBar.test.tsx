import { describe, expect, it, afterEach, beforeEach, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../test-utils';
import { SearchBar } from '../../components';

describe.skip('SearchBar', () => {
	vi.mock('next/router', () => ({
		useRouter: () => ({
			push: vi.fn(),
			query: { category: 'people', id: '1' },
		}),
	}));
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
});
