import { http, HttpResponse } from 'msw';
import { lukeSearch } from './mocks/lukeSearch';
import { characterNotFound } from './mocks/characterNotFound';
import { TabsResponse } from './mocks/Tabs/tabs.mock';
import { getOneItem } from './mocks/getOneItem';
import { mockFilmsResponse } from './mocks/films.mock.response';

export const handlers = [
	http.get('https://swapi.dev/api', () => {
		return HttpResponse.json(TabsResponse);
	}),
	http.get('https://swapi.dev/api/people', ({ request }) => {
		const url = new URL(request.url);

		const searchValue = url.searchParams.get('search');

		if (searchValue === 'luke') return HttpResponse.json(lukeSearch);

		return HttpResponse.json(characterNotFound);
	}),

	http.get('https://swapi.dev/api/films', () => {
		return HttpResponse.json(mockFilmsResponse);
	}),

	http.get('https://swapi.dev/api/people/1', () => {
		return HttpResponse.json(getOneItem);
	}),
	http.get('https://swapi.dev/api/people/2', () => {
		return new HttpResponse('page not found');
	}),
];
