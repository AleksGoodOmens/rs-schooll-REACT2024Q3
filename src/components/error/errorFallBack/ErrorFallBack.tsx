import { Component } from 'react'

import styles from './styles.module.css'
import { IEmptyProp, IErrorFallBackState } from '../../../interfaces/interfaces'

class ErrorFallBack extends Component<IEmptyProp, IErrorFallBackState> {
	constructor(props: IEmptyProp) {
		super(props)
	}

	handleReload = () => {
		window.location.reload()
	}

	render() {
		return (
			<div className={styles.box}>
				<h1>If you see that message - you a great person!</h1>
				<h2>
					But you know that you click wrong button and now you got an Error
				</h2>
				<div className={styles.img}>
					<img
						width={100}
						height={200}
						src="/error.png"
						alt="error"
					/>
				</div>
				<button onClick={this.handleReload}>Reload APP</button>
			</div>
		)
	}
}

export default ErrorFallBack
