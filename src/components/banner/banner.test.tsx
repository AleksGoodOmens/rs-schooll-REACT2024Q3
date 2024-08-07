import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
	it('render proper value when pass children string', () => {
		render(<Banner>hello RS</Banner>);
		expect(screen.getByText(/hello/i)).toBeInTheDocument();
	});
});
