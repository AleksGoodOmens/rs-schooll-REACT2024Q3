import { ChangeEvent, Component, FormEvent } from 'react';

import styles from './styles.module.css';
import { ISearchBarProp, ISearchBarState } from '../../interfaces/interfaces';

export default class SearchBar extends Component<
	ISearchBarProp,
	ISearchBarState
> {
	constructor(props: ISearchBarProp) {
		super(props);
		this.state = {
			searchValue: props.searchValue,
		};
	}

	componentDidUpdate(prevProps: ISearchBarProp) {
		if (this.props.searchValue !== prevProps.searchValue) {
			this.setState({ searchValue: this.props.searchValue });
		}
	}

	handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			this.setState({ searchValue: e.currentTarget.value });
		}
	};

	handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { searchValue } = this.state;

		const clearSearchValue = searchValue.trim();

		window.localStorage.setItem('searchValue', clearSearchValue);
		this.props.changeItems(clearSearchValue);
	};
	render() {
		return (
			<form
				className={styles.form}
				onSubmit={this.handleSubmit}
			>
				<label htmlFor="search"> Search characters by name:</label>
				<input
					onChange={this.handleChangeInputValue}
					value={this.state.searchValue}
					type="search"
					name="search"
					id="search"
				/>

				<button type="submit">Search</button>
			</form>
		);
	}
}
