import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
// import { useContext } from 'react';
// import ue from '@testing-library/user-event';
import Tabs from './Tabs';

// vi.mock('react-router-dom', async (importOriginal) => {
// 	const actual = await importOriginal<object>();
// 	return {
// 		...actual,
// 		useOutletContext: () => useContext(MockOutletContext),
// 	};
// });

// const user = ue.setup();

describe('Tabs', () => {
	afterEach(() => {
		cleanup();
	});
	it('Render all tabs', () => {
		render(<Tabs />);
		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Now you are on a LightSide');
	});
});
