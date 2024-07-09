import { useEffect, useState } from 'react';

const UseLocalStorage = (v: string) => {
	const [lStorage, setLStorage] = useState('');

	useEffect(() => {
		getDataFromLocalStorage(v);
	}, [v]);

	const getDataFromLocalStorage = async (value: string) => {
		const res = await window.localStorage.getItem(value);

		if (res) {
			setLStorage(res);
			return;
		}
		return;
	};

	const setDataToLocalStorage = (value: string, key: string) => {
		window.localStorage.setItem(value, key);
	};

	return { lStorage, setDataToLocalStorage, getDataFromLocalStorage };
};

export default UseLocalStorage;
