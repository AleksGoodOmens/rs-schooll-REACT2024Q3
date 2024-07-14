import { http, HttpResponse } from 'msw';
import { lukeSearch } from './mocks/lukeSearch';
import { characterNotFound } from './mocks/characterNotFound';

export const handlers = [
	http.get('/people', ({ request }) => {
		const url = new URL(request.url);

		const searchValue = url.searchParams.get('search');

		if (searchValue === 'luke') return HttpResponse.json(lukeSearch);

		return HttpResponse.json(characterNotFound);
	}),
];
