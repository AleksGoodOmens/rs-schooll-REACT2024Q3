import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, screen } from '@testing-library/react';
import Tabs from './Tabs';
import { renderWithProviders } from '../../test/test-utils';

describe('Tabs', () => {
	beforeEach(() => {
		renderWithProviders(<Tabs />);
	});
	afterEach(() => {
		cleanup();
	});

	it('render loader on loading stage', async () => {
		const loadingText = screen.getByText('tabs Loading...');

		expect(loadingText).toBeInTheDocument();
	});

	it('render correct items on loaded stage', async () => {
		await screen.findAllByRole('link');
		screen.debug();
	});
});
