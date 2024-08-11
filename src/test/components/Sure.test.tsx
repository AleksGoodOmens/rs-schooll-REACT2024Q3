import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Sure from '../../components/downloader/Sure';
import cardsSlice from '../../store/slices/cards.slice';

vi.mock('../../store', () => ({
	...vi.importActual('../../store'),
	useAppDispatch: () => vi.fn(),
}));

describe('Sure component', () => {
	const store = configureStore({
		reducer: { cards: cardsSlice },
	});

	it('should render correctly', () => {
		render(
			<Provider store={store}>
				<Sure setSure={vi.fn()} />
			</Provider>,
		);

		expect(screen.getByText('Are you sure?')).toBeInTheDocument();
		expect(screen.getByText('yes')).toBeInTheDocument();
		expect(screen.getByText('no')).toBeInTheDocument();
	});

	it('should call setSure(false) on "no" button click', () => {
		const mockSetSure = vi.fn();
		render(
			<Provider store={store}>
				<Sure setSure={mockSetSure} />
			</Provider>,
		);

		fireEvent.click(screen.getByText('no'));
		expect(mockSetSure).toHaveBeenCalledWith(false);
	});
});
