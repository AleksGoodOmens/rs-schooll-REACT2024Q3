import { Component } from 'react'

import { IEmptyProp, IAppState } from '../../interfaces/interfaces'
import getData from '../../utils/getData'
import SearchBar from '../searchBar/SearchBar'
import SearchResults from '../searchResults/SearchResults'

class App extends Component<IEmptyProp, IAppState> {
	constructor(props: IEmptyProp) {
		super(props)
		this.state = {
			data: [],
			searchValue: '',
			isLoading: true,
			fade: '',
		}
	}
	async componentDidMount(): Promise<void> {
		const prevSearch = await window.localStorage.getItem('searchValue')

		if (prevSearch) {
			this.setState({ searchValue: prevSearch })
		}
		const data = await getData(prevSearch || this.state.searchValue)

		this.setState({
			data: data,
			isLoading: false,
			searchValue: prevSearch || '',
			fade: 'fadeIn',
		})
	}

	changeItems = async (value: string) => {
		try {
			this.setState({ fade: 'fadeOut' })

			setTimeout(async () => {
				this.setState({ isLoading: true, fade: '' })
				const data = await getData(value)
				this.setState({
					searchValue: value,
					data,
					isLoading: false,
					fade: 'fadeIn',
				})
			}, 500) // Wait for fade out animation to complete
		} catch (error) {
			console.error('Error fetching data:', error)
			this.setState({ isLoading: false, fade: 'fadeIn' })
		}
	}

	render() {
		const { searchValue, fade, data } = this.state
		return (
			<div className="wrapper">
				<section>
					<SearchBar
						searchValue={searchValue}
						changeItems={this.changeItems}
					/>
				</section>
				<section>
					<SearchResults
						fade={fade}
						data={data}
					/>
				</section>
			</div>
		)
	}
}

export default App
