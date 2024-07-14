import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loader from './loader';

describe('loader', () => {
	it('should render loader component with next - Loading...', () => {
		render(<Loader />);

		const loadingText = screen.getByText('Loading...');

		expect(loadingText).toBeInTheDocument();
	});
});
