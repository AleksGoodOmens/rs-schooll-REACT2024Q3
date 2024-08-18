import cn from 'classnames';

import inputStyles from './Terms.module.css';
import { useFormContext } from 'react-hook-form';

export const TermsInput = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<label className={inputStyles['label']}>
				Accept my terms
				<input
					className={cn(inputStyles['input'], {
						[inputStyles['input-error']]: errors['terms'],
					})}
					type="checkbox"
					{...register('terms')}
				/>
			</label>

			<p
				className={cn(inputStyles['error'], {
					[inputStyles['error-active']]: errors['terms'],
				})}
			>
				{errors['terms']?.message ? String(errors['terms'].message) : ''}
			</p>
		</>
	);
};
