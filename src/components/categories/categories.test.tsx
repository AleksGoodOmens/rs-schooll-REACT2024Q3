import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, screen } from '@testing-library/react';
import Categories from './Categories';
import { renderWithProviders } from '../../test/test-utils';

describe('Categories', () => {
	beforeEach(() => {
		renderWithProviders(<Categories />);
	});
	afterEach(() => {
		cleanup();
	});

	it('render loader on loading stage', async () => {
		const loadingText = screen.getByText('tabs Loading...');

		expect(loadingText).toBeInTheDocument();
	});

	it('render correct items on loaded stage', async () => {
		const buttons = await screen.findAllByRole('button', { name: /mock/i });

		expect(buttons.length).toBe(6);
	});
});
