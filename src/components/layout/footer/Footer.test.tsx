import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('footer', () => {
	it('footer is rendered at the page', () => {
		render(<Footer />);

		const loadingText = screen.getByText('Developed by AmensGood');

		expect(loadingText).toBeInTheDocument();
	});
});
