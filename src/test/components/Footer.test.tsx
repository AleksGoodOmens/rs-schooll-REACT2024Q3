import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../components';

describe('footer', () => {
	it('footer is rendered at the page', () => {
		render(<Footer />);

		expect(screen.getByText('Developed by AmensGood')).toBeInTheDocument();
	});
});
