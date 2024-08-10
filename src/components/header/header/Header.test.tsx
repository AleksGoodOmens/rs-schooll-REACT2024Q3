import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
	it('header is rendered at the page with proper aria-label', () => {
		render(<Header />);

		const loadingText = screen.getByRole('banner', {
			name: 'AmensGood navigation header',
		});

		expect(loadingText).toBeInTheDocument();
	});
});
