import { useState } from 'react';

interface LocalStorageData {
	category?: string;
	searchValue: string;
}

// Определение типа для функции, устанавливающей данные
type SetItemFunction = (data: LocalStorageData) => void;

const useLocalStorage = (): [LocalStorageData, SetItemFunction] => {
	const initLocalStorage = (): LocalStorageData => {
		const storage = window.localStorage.getItem('starWarsWiki');
		if (storage) {
			return JSON.parse(storage);
		} else {
			return {
				category: '',
				searchValue: '',
			};
		}
	};

	const [localStorage, setLocalStorage] =
		useState<LocalStorageData>(initLocalStorage);

	const setItem: SetItemFunction = (data: LocalStorageData) => {
		setLocalStorage(data);
		const jsonData = JSON.stringify(data);
		window.localStorage.setItem('starWarsWiki', jsonData);
	};

	return [localStorage, setItem];
};

export default useLocalStorage;
