import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './page';
import { MemoryRouter as Router } from 'react-router-dom';

describe('404 NotFound', () => {
	it('user can see that this page not found', () => {
		render(
			<Router>
				<NotFoundPage />
			</Router>,
		);

		const loadingText = screen.getByText('page not found');

		expect(loadingText).toBeInTheDocument();
	});
});
