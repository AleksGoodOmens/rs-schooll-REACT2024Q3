import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../../test/test-utils';
import Card from './Card';
import { screen } from '@testing-library/dom';

describe('Card', () => {
	vi.mock('next/router', () => ({
		useRouter: () => ({
			push: vi.fn(),
			query: { category: 'people' },
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

		renderWithProviders(
			<Card
				card={mockProps}
				isInFavorite={false}
				isActive={false}
			/>,
		);

		expect(
			screen.getByRole('button', { name: /Open details/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('checkbox', { checked: false }),
		).toBeInTheDocument();
	});
	it('rendered in active style and checkbox non active', async () => {
		const mockProps = {
			name: 'Luke mock',
			url: 'https://swapi.dev/api/people/1/',
			title: '',
			favorite: false,
			id: '1',
			category: 'people',
		};

		renderWithProviders(
			<Card
				card={mockProps}
				isInFavorite={false}
				isActive={true}
			/>,
		);

		expect(
			screen.getByRole('button', { name: /close details/i }),
		).toBeInTheDocument();
		expect(
			screen.queryByRole('checkbox', { checked: false }),
		).toBeInTheDocument();
	});
});
