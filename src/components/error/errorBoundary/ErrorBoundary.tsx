import { Component, ErrorInfo } from 'react';
import IErrorFallBack from '../errorFallBack/ErrorFallBack';
import {
	IErrorBoundaryProps,
	IErrorBoundaryState,
} from '../../../interfaces/interfaces';

class ErrorBoundary extends Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	constructor(props: IErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): Partial<IErrorBoundaryState> {
		console.log('Error caught in getDerivedStateFromError:', error);
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo): void {
		console.error('Error caught by ErrorBoundary:', error, info);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <IErrorFallBack props={{}} />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
