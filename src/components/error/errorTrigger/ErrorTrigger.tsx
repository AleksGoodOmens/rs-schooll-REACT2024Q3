import { Component } from 'react'

import styles from './styles.module.css'
import { IEmptyProp, IErrorTriggerState } from '../../../interfaces/interfaces'

class ErrorTrigger extends Component<IEmptyProp, IErrorTriggerState> {
	constructor(props: IEmptyProp) {
		super(props)
		this.state = { isError: false, button: 'Wrong button' }
	}
	throwError = () => {
		this.setState({ isError: !this.state.isError })
	}

	changeTextMouseEnter = () => {
		this.setState({ isError: false, button: 'Throw an error' })
	}

	changeTextMouseLeave = () => {
		this.setState({ isError: false, button: 'Wrong button' })
	}

	render() {
		if (this.state.isError) {
			throw new Error('Triggered error')
		}

		return (
			<div className={styles.box}>
				<h1>Welcome to the Star wars character base</h1>
				<button
					onClick={this.throwError}
					onMouseEnter={this.changeTextMouseEnter}
					onMouseLeave={this.changeTextMouseLeave}
				>
					{this.state.button}
				</button>
			</div>
		)
	}
}

export default ErrorTrigger
