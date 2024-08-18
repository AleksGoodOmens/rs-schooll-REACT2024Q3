import { HTag, Tile } from '../../components';
import styles from './styles.module.css';

import {
	controlledSelector,
	unControlledSelector,
	useAppSelector,
} from '../../store';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

export const MainPage = () => {
	const [searchParams] = useSearchParams();
	const uncontrolledFormValues = useAppSelector(unControlledSelector);
	const controlledFormValues = useAppSelector(controlledSelector);

	return (
		<>
			<HTag value={1}>Here you will see summary of your form</HTag>

			<section className={styles['wrapper']}>
				<article
					className={classNames(styles['article'], {
						[styles['active']]: searchParams.get('active') === 'unControlled',
					})}
				>
					<HTag value={2}>Uncontrolled form values from store</HTag>
					{uncontrolledFormValues.name ? (
						<Tile {...uncontrolledFormValues} />
					) : (
						'Please fill the uncontrolled form'
					)}
				</article>
				<article
					className={classNames(styles['article'], {
						[styles['active']]: searchParams.get('active') === 'controlled',
					})}
				>
					<HTag value={2}>Controlled form values from store</HTag>
					{controlledFormValues.name ? (
						<Tile {...controlledFormValues} />
					) : (
						'Please fill the controlled form'
					)}
				</article>
			</section>
		</>
	);
};
