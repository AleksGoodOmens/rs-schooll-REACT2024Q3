import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Intro } from '../../components';

describe('Intro', () => {
	it('render intro', () => {
		render(<Intro />);
		expect(
			screen.getByText(
				/To start your expedition please choose category below/i,
			),
		).toBeInTheDocument();
	});
});
