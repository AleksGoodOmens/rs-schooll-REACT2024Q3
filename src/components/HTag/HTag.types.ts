import { HTMLAttributes, ReactNode } from 'react';

export interface IHTag extends HTMLAttributes<HTMLHeadingElement> {
	value: number;
	children: ReactNode;
}
