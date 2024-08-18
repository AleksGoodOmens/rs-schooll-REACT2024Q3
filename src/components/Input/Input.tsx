import cn from 'classnames';
import { IInput } from './Input.types';

import inputStyles from './Input.module.css';
import { useFormContext } from 'react-hook-form';

export const Input = ({ className, name = 'name', type = 'text' }: IInput) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<label
				className={inputStyles['label']}
				htmlFor={name}
			>
				{name}
			</label>
			<input
				className={cn(inputStyles['input'], {
					[inputStyles[className || 'class']]: className,
					[inputStyles['input-error']]: errors[name],
				})}
				type={type}
				id={name}
				{...register(name)}
			/>

			<p
				className={cn(inputStyles['error'], {
					[inputStyles['error-active']]: errors[name],
				})}
			>
				{errors[name]?.message ? String(errors[name].message) : ''}
			</p>
		</>
	);
};
