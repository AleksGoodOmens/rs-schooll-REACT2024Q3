import { http, HttpResponse } from 'msw';
import { lukeSearch } from './mocks/lukeSearch';
import { characterNotFound } from './mocks/characterNotFound';
import { TabsResponse } from './mocks/Tabs/tabs.mock';

export const handlers = [
	http.get('*', ({ request }) => {
		// const url = new URL(request.url);
		console.log(request);
		return HttpResponse.json(TabsResponse);
	}),
	http.get('*/people', ({ request }) => {
		const url = new URL(request.url);

		const searchValue = url.searchParams.get('search');

		if (searchValue === 'luke') return HttpResponse.json(lukeSearch);

		return HttpResponse.json(characterNotFound);
	}),
];
