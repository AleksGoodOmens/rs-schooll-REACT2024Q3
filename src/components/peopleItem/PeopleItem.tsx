import { Component } from 'react';

import { IPeopleItem } from '../../interfaces/interfaces';

import styles from './styles.module.css';

class PeopleItem extends Component<IPeopleItem> {
	constructor(props: IPeopleItem) {
		super(props);
	}

	render() {
		return (
			<article
				className={styles.box}
				key={this.props.name}
			>
				<h2>{this.props.name}</h2>
				<dl>
					<dt>Description</dt>
					<dd>height: {this.props.height}</dd>
					<dd>gender: {this.props.gender}</dd>
					<dd>eyes: {this.props.eye_color}</dd>
					<dd>hair: {this.props.hair_color}</dd>
					<dd>skin: {this.props.skin_color}</dd>
					<dd>year: {this.props.birth_year}</dd>
					<dd>mass: {this.props.mass}</dd>
				</dl>
			</article>
		);
	}
}

export default PeopleItem;
