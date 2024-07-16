import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('header', () => {
	it('header is rendered at the page', () => {
		render(<Header />);

		const loadingText = screen.getByText('AmensGood');

		expect(loadingText).toBeInTheDocument();
	});
});
