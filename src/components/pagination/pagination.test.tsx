import { describe, expect, it } from 'vitest';
import Pagination from './Pagination';
import { renderWithProviders } from '../../test/test-utils';

describe('Pagination', () => {
	it('should render correctly with initial state', () => {
		const { getByText } = renderWithProviders(<Pagination />);
		expect(getByText('Total cards:')).toBeInTheDocument();
		expect(getByText('Pages:')).toBeInTheDocument();
		expect(getByText('prev')).toBeDisabled();
		expect(getByText('next')).toBeDisabled();
	});

	it('should render correctly with disabled next button', () => {
		const { getByText } = renderWithProviders(<Pagination />);
		expect(getByText('next')).toBeDisabled();
	});

	it('should render correctly with disabled prev button', () => {
		const { getByText } = renderWithProviders(<Pagination />);
		expect(getByText('prev')).toBeDisabled();
	});
});
