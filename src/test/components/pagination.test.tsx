import { describe, expect, it, vi } from 'vitest';

import { renderWithProviders } from '../../test/test-utils';
import { Pagination } from '../../components';

describe.todo('Pagination', () => {
	vi.mock('next/router', () => ({
		useRouter: () => ({
			push: vi.fn(),
			query: {
				category: 'category1',
				page: '1',
				search: 'term',
			},
		}),
	}));

	const props = { count: 100, page: '5' };

	it('should render correctly with initial state', () => {
		const { getByText } = renderWithProviders(<Pagination {...props} />);
		expect(getByText(/Total cards:/i)).toBeInTheDocument();
		expect(getByText('Pages:')).toBeInTheDocument();
	});

	it('should render correctly with disabled next button', () => {
		const props = { count: 1, page: '1' };

		const { getByRole } = renderWithProviders(<Pagination {...props} />);

		expect(getByRole('button', { name: /next/i })).toBeDisabled();
	});

	it('should render correctly with disabled prev button', () => {
		const props = { count: 100, page: '1' };

		const { getByRole } = renderWithProviders(<Pagination {...props} />);
		expect(getByRole('button', { name: /prev/i })).toBeDisabled();
	});
});
