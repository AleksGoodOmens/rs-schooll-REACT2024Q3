export const getCategoryAndIdFromUrl = (url: string) => {
	let category: string;
	let id: string;
	const regex = /https:\/\/swapi\.dev\/api\/([^/]+\/\d+)\//;
	const match = url.match(regex);

	if (match) {
		const res = match[1].split('/');
		id = res[1];
		category = res[0];

		return { category, id };
	}
	return null;
};
