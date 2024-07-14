import { http, HttpResponse } from 'msw';
import { lukeSearch } from './mocks/lukeSearch';
import { characterNotFound } from './mocks/characterNotFound';

export const handlers = [
	// And here's a request handler with MSW
	// for the same "GET /user" request that
	// responds with a mock JSON response.
	http.get('/people', ({ request }) => {
		const url = new URL(request.url);

		const searchValue = url.searchParams.get('search');

		if (searchValue === 'luke') return HttpResponse.json(lukeSearch);

		return HttpResponse.json(characterNotFound);
	}),
];
