const BASE_URL = 'https://swapi.dev/api/people'

import { IPeopleItem, ApiResponse } from '../interfaces/interfaces'

const getData = async (searchQuery: string = ''): Promise<IPeopleItem[]> => {
	try {
		const url = new URL(BASE_URL)
		url.searchParams.append('search', searchQuery)

		const res = await fetch(`${url.toString()}`)
		const data: ApiResponse = await res.json()

		data.results.map((item) => {
			return {
				name: item.name,
				height: item.height,
				mass: item.mass,
				hair_color: item.hair_color,
				skin_color: item.skin_color,
				eye_color: item.eye_color,
				birth_year: item.birth_year,
				gender: item.gender,
			}
		})
		return data.results
	} catch (error) {
		console.log(`server fetching data: ${error}`)
		return []
	}
}

export default getData
