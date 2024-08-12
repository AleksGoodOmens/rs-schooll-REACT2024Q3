import cn from 'classnames';

import HStyles from './HTag.module.css';
import { IHTag } from './HTag.types';

export const HTag = ({ className, value, children, ...props }: IHTag) => {
	switch (value) {
		case 1:
			return (
				<h1
					className={cn(className, HStyles['h'], HStyles['h1'])}
					{...props}
				>
					{children}
				</h1>
			);
		case 2:
			return (
				<h2
					className={cn(className, HStyles['h'], HStyles['h2'])}
					{...props}
				>
					{children}
				</h2>
			);

		default:
			return <></>;
	}
};
