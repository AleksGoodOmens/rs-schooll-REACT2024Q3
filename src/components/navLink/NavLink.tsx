'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FunctionComponent, ReactNode } from 'react';

import styles from './styles.module.css';

interface NavLinkProps {
	href: string;
	exact: boolean;
	children: ReactNode;
	className: string;
	onClick: () => void;
}

const NavLink: FunctionComponent<NavLinkProps> = ({
	href,
	exact,
	children,
	...props
}) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.endsWith(href);

	if (isActive) {
		props.className += ' ' + styles['active'];
	}

	return (
		<Link
			href={href}
			{...props}
		>
			{children}
		</Link>
	);
};

export default NavLink;
