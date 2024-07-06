import { Component } from 'react'

import styles from './styles.module.css'
import PeopleItem from '../peopleItem/PeopleItem'
import { IResultProps } from '../../interfaces/interfaces'

class SearchResults extends Component<IResultProps> {
	constructor(props: IResultProps) {
		super(props)
	}

	render() {
		return (
			<>
				<h2>Search results</h2>

				<div className={`${styles.flex} ${this.props.fade}`}>
					{this.props.data.map((item) => (
						<PeopleItem
							key={item.name}
							{...item}
						/>
					))}
				</div>
			</>
		)
	}
}

export default SearchResults
