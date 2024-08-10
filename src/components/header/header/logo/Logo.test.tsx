import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
	it('Logo should have link with proper aria label', () => {
		render(<Logo />);

		const link = screen.getByRole('link', {
			name: 'link to AmensGood personal website',
		});

		expect(link).toBeInTheDocument();
	});
});
