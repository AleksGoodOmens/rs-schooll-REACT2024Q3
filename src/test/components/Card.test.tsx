import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../test-utils';
import { screen } from '@testing-library/dom';
import { Card } from '../../components';

describe('Card', () => {
	describe('non active style', () => {
		vi.mock('next/navigation', () => ({
			useParams: () => ({
				category: 'people',
				id: '',
			}),
			useSearchParams: () => ({
				get: (v: string) => {
					const value = {
						page: '1',
						search: '',
					};
					return v === 'page' ? value.page : value.search;
				},
			}),
		}));
		it('card rendered non active style and checkbox non active', async () => {
			const mockProps = {
				name: 'Luke mock',
				url: 'https://swapi.dev/api/people/1/',
				title: '',
				favorite: false,
				id: '1',
				category: 'people',
			};

			renderWithProviders(<Card card={mockProps} />);

			expect(
				screen.getByRole('link', { name: /Open details/i }),
			).toBeInTheDocument();
			expect(
				screen.getByRole('checkbox', { checked: false }),
			).toBeInTheDocument();
		});
	});
});
