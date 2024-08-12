import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderWithProviders } from '../test-utils';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { cleanup } from '@testing-library/react';
import { Downloader } from '../../components';

describe.skip('Downloader', () => {
	beforeEach(() => {
		cleanup();
		renderWithProviders(<Downloader />);
	});

	afterEach(() => {
		cleanup();
	});

	it('render component with proper amount of favorite cards, button to unselect, link to download', () => {
		expect(
			screen.getByLabelText(/amount of favorite cards = /i),
		).toBeInTheDocument();

		expect(
			screen.getByRole('button', { name: /Unselect all/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: /Download favorite/i }),
		).toBeInTheDocument();
	});

	it('show question to prove unselect items', async () => {
		await userEvent.click(
			screen.getByRole('button', { name: /Unselect all/i }),
		);
		expect(
			screen.queryByRole('button', { name: /Unselect all/i }),
		).not.toBeInTheDocument();

		expect(screen.getByRole('button', { name: /yes/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /no/i })).toBeInTheDocument();
	});

	it('after click "NO" component return to first style', async () => {
		await userEvent.click(
			screen.getByRole('button', { name: /Unselect all/i }),
		);
		expect(
			screen.queryByRole('button', { name: /Unselect all/i }),
		).not.toBeInTheDocument();

		expect(screen.getByRole('button', { name: /yes/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /no/i })).toBeInTheDocument();

		await userEvent.click(screen.getByRole('button', { name: /no/i }));

		expect(
			screen.queryByRole('button', { name: /Unselect all/i }),
		).toBeInTheDocument();

		expect(
			screen.queryByRole('button', { name: /yes/i }),
		).not.toBeInTheDocument();
		expect(
			screen.queryByRole('button', { name: /no/i }),
		).not.toBeInTheDocument();
	});

	it('render proper text when come only 1 item in favoriteCards', () => {
		renderWithProviders(<Downloader />, {
			preloadedState: {
				cards: {
					cards: [],
					totalPages: 0,
					totalCards: 0,
					page: 1,
					next: false,
					previous: false,
					searchValue: '',
					activeCard: null,
					favoriteCards: [
						{
							url: 'swap',
							category: 'people',
							favorite: true,
							id: '1',
							name: 'luke',
							title: undefined,
						},
					],
				},
			},
		});

		expect(screen.getAllByText(/card is/i)[0]).toBeInTheDocument();
	});
});
