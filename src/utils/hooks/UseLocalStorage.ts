'use client';
import { useState, useEffect } from 'react';

export interface ILocalStorage {
	[key: string]: string;
}

export const useLocalStorage = (key: string, initialValue?: string) => {
	const localStoreName = 'starWarsWiki';
	const [currentValue, setCurrentValue] = useState(initialValue);

	useEffect(() => {
		// Проверяем, существует ли window, чтобы избежать ошибок на сервере
		if (typeof window !== 'undefined') {
			const storage = window.localStorage.getItem(localStoreName);
			const store = storage ? JSON.parse(storage) : {};
			if (store[key]) {
				setCurrentValue(store[key]);
			}
		}
	}, [key]);

	const setToLocalStorage = (k: string, v: string) => {
		const storage = window.localStorage.getItem(localStoreName);
		const store = storage ? JSON.parse(storage) : {};
		store[k] = v;

		setCurrentValue(v);
		window.localStorage.setItem(localStoreName, JSON.stringify(store));
	};

	return [currentValue, setToLocalStorage] as const;
};
