import cn from 'classnames';
import { IInput } from './Input.types';

import inputStyles from './Input.module.css';

export const Input = ({ className, ...props }: IInput) => {
	return (
		<input
			className={cn(className, inputStyles['input'])}
			{...props}
		/>
	);
};
