import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loader } from '../../components';

describe('loader', () => {
	it('Should render loader component with next text - "Loading..."', () => {
		render(<Loader />);

		const loadingText = screen.getByText('Loading...');

		expect(loadingText).toBeInTheDocument();
	});
});
