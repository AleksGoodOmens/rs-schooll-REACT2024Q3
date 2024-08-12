import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialLinks } from '../../components';

describe('SocialLinks', () => {
	it('Component render 3 links', () => {
		render(<SocialLinks />);

		const links = screen.getAllByRole('link');

		expect(links.length).toBe(3);
	});
});
