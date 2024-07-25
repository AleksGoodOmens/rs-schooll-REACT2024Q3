import { useState } from 'react';

export interface ILocalStorage {
	[key: string]: string;
}

const useLocalStorage_v2 = (value: string) => {
	const initLocalStorage = (): ILocalStorage => {
		const storage = window.localStorage.getItem(localStoreName);
		if (!storage) return {};

		return JSON.parse(storage);
	};

	const localStoreName = 'starWarsWiki';
	const getValueFromLocalStorage = (k: string) => {
		const store = initLocalStorage();
		return store[k] || '';
	};

	const [currentValue, setCurrentValue] = useState(
		getValueFromLocalStorage(value),
	);
	const setToLocalStorage = (k: string, v: string) => {
		setCurrentValue(v);
		let store = initLocalStorage();

		store = { ...store, [k]: v };

		setCurrentValue(v);

		window.localStorage.setItem(localStoreName, JSON.stringify(store));
	};

	return [currentValue, setToLocalStorage] as const;
};

export default useLocalStorage_v2;
