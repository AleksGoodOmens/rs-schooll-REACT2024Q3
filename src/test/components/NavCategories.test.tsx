import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NavCategories } from '../../components';

describe.todo('Categories', () => {
	vi.mock('next/router', () => ({
		useRouter: () => ({
			push: vi.fn(),
			query: { category: 'people' },
		}),
	}));

	it('render correct items on loaded stage', async () => {
		render(<NavCategories />);

		expect(screen.findAllByRole('link')).toBeInTheDocument();
	});
});
