import { ReactNode } from 'react';

interface IErrorTriggerState {
	isError: boolean;
	button: 'Wrong button' | 'Throw an error';
}

interface IErrorBoundaryProps {
	children: ReactNode;
}

interface IErrorBoundaryState {
	hasError: boolean;
}

interface IErrorFallBackState {
	hasError: boolean;
}

export type {
	IErrorTriggerState,
	IErrorBoundaryProps,
	IErrorBoundaryState,
	IErrorFallBackState,
};
