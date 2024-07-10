import { useState } from 'react';

type UseLocalStorageReturnType = [string, (key: string, value: string) => void];

function useLocalStorage(initialKey: string): UseLocalStorageReturnType {
	const getDataFromLocalStorage = (): string => {
		const res = window.localStorage.getItem(initialKey);
		if (res) {
			return res;
		}
		return '';
	};

	const [storage, setStorage] = useState<string>(getDataFromLocalStorage);

	const setDataToLocalStorage = (key: string, value: string): void => {
		const clearValue = value.trim().toLowerCase();
		setStorage(clearValue);
		window.localStorage.setItem(key, clearValue);
	};

	return [storage, setDataToLocalStorage];
}

export default useLocalStorage;
