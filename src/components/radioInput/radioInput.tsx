import cn from 'classnames';

import radioStyles from './radio.module.css';
import { useFormContext } from 'react-hook-form';
import { HTag } from '../HTag/HTag';

export const RadioInput = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<HTag value={4}>Chose your gender</HTag>
			<div className={radioStyles['wrapper']}>
				<label className={radioStyles['label']}>
					Male
					<input
						className={cn(radioStyles['input'], {
							[radioStyles['input-error']]: errors['gender'],
						})}
						type="radio"
						value="male"
						{...register('gender')}
					/>
				</label>
				<label className={radioStyles['label']}>
					Female
					<input
						className={cn(radioStyles['input'], {
							[radioStyles['input-error']]: errors['gender'],
						})}
						type="radio"
						value="female"
						{...register('gender')}
					/>
				</label>
			</div>

			<p
				className={cn(radioStyles['error'], {
					[radioStyles['error-active']]: errors['gender'],
				})}
			>
				{errors['gender']?.message ? String(errors['gender'].message) : ''}
			</p>
		</>
	);
};
