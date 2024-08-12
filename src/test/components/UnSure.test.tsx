import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from '../../store/slices/cards.slice';
import UnSure from '../../components/downloader/UnSure';

vi.mock('../../store/hooks/hooks', () => ({
	useAppSelector: (
		selector: (arg0: {
			cards: { favoriteCards: { name: string; title: string; url: string }[] };
		}) => unknown,
	) =>
		selector({
			cards: {
				favoriteCards: [
					{
						name: 'Luke Skywalker',
						title: 'Jedi Master',
						url: 'http://example.com/people/1',
					},
					{
						name: 'Darth Vader',
						title: 'Sith Lord',
						url: 'http://example.com/people/2',
					},
				],
			},
		}),
}));

describe('UnSure component', () => {
	const mockSetSure = vi.fn();

	const store = configureStore({
		reducer: { cards: cardsSlice },
	});

	it('should render correctly', () => {
		render(
			<Provider store={store}>
				<UnSure setSure={mockSetSure} />
			</Provider>,
		);

		expect(screen.getByText('2')).toBeInTheDocument();
		expect(screen.getByText('Cards are selected')).toBeInTheDocument();
	});

	it('should call setSure with true on button click', () => {
		render(
			<Provider store={store}>
				<UnSure setSure={mockSetSure} />
			</Provider>,
		);

		fireEvent.click(screen.getByText('Unselect all'));
		expect(mockSetSure).toHaveBeenCalledWith(true);
	});

	it('should have the correct filename for the CSV download', () => {
		render(
			<Provider store={store}>
				<UnSure setSure={mockSetSure} />
			</Provider>,
		);

		const csvLink = screen.getByText('Download favorite');
		expect(csvLink).toBeInTheDocument();
	});
});
