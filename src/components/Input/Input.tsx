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
		<fieldset>
			<label htmlFor={name}>{name}</label>
			<input
				className={cn(className, inputStyles['input'])}
				type={type}
				id={name}
				{...register(name)}
			/>
			<p>{errors[name]?.message ? '' + errors[name]?.message : ''}</p>
		</fieldset>
	);
};
