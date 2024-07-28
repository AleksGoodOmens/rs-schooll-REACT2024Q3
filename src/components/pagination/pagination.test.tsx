import { describe, expect, it } from 'vitest';

import Pagination from './Pagination';
import { renderWithProviders } from '../../test/test-utils';
import userEvent from '@testing-library/user-event';

describe('Pagination', () => {
	it('should render correctly with initial state', () => {
		const { getByText } = renderWithProviders(<Pagination />);
		expect(getByText(/Total cards:/i)).toBeInTheDocument();
		expect(getByText('Pages:')).toBeInTheDocument();
	});

	it('should render correctly with disabled next button', () => {
		const { getByRole } = renderWithProviders(<Pagination />);
		expect(getByRole('button', { name: /next/i })).toBeDisabled();
	});

	it('should render correctly with disabled prev button', () => {
		const { getByRole } = renderWithProviders(<Pagination />);
		expect(getByRole('button', { name: /prev/i })).toBeDisabled();
	});

	it('should change page value +1 after click next button', async () => {
		const { getByRole, getByText } = renderWithProviders(<Pagination />, {
			preloadedState: {
				cards: {
					cards: [],
					favoriteCards: [],
					activeCard: null,
					totalPages: 10,
					totalCards: 100,
					page: 1,
					next: true,
					previous: false,
					searchValue: '',
				},
			},
		});

		expect(getByRole('button', { name: /next/i })).not.toBeDisabled();

		await userEvent.click(getByRole('button', { name: /next/i }));

		expect(getByText(/2/i).textContent).toBe('2/10');
	});

	it('should change page value -1 after click prev button', async () => {
		const { getByRole, getByText } = renderWithProviders(<Pagination />, {
			preloadedState: {
				cards: {
					cards: [],
					favoriteCards: [],
					activeCard: null,
					totalPages: 10,
					totalCards: 100,
					page: 9,
					next: true,
					previous: true,
					searchValue: '',
				},
			},
		});

		expect(getByRole('button', { name: /prev/i })).not.toBeDisabled();

		await userEvent.click(getByRole('button', { name: /prev/i }));

		expect(getByText(/8\/10/i).textContent).toBe('8/10');
	});
});
