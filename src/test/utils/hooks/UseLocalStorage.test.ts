// useLocalStorage.test.tsx
import { renderHook, act } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { useLocalStorage } from '../../../utils';

describe('useLocalStorage', () => {
	beforeEach(() => {
		// Очистить localStorage перед каждым тестом
		window.localStorage.clear();
	});

	it('should initialize with the given initial value', () => {
		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue'),
		);

		expect(result.current[0]).toBe('initialValue');
	});

	it('should set and get value from localStorage', () => {
		const { result } = renderHook(() => useLocalStorage('testKey'));

		act(() => {
			const [, setValue] = result.current;
			setValue('testKey', 'newValue');
		});

		const { result: newResult } = renderHook(() => useLocalStorage('testKey'));

		expect(newResult.current[0]).toBe('newValue');
	});

	it('should update localStorage when value changes', () => {
		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue'),
		);

		act(() => {
			const [, setValue] = result.current;
			setValue('testKey', 'updatedValue');
		});

		expect(window.localStorage.getItem('starWarsWiki')).toContain(
			'updatedValue',
		);
	});

	it('should handle absence of initial value correctly', () => {
		const { result } = renderHook(() => useLocalStorage('nonExistingKey'));

		expect(result.current[0]).toBeUndefined();
	});
});
