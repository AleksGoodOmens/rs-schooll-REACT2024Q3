import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NavCategory } from '../../components';

describe('NavCategory', () => {
	vi.mock('next/navigation', () => ({
		useParams: () => ({
			category: 'mock',
		}),
	}));
	it('render correct category', () => {
		render(<NavCategory>mockChildren</NavCategory>);

		const links = screen.getByRole('link');

		expect(links).toBeInTheDocument();
	});
});
