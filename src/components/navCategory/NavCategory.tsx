'use client';
import classNames from 'classnames';
import styles from './styles.module.css';
import { FunctionComponent, ReactNode } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface NavCategoryProps {
	children: ReactNode;
}

export const NavCategory: FunctionComponent<NavCategoryProps> = ({
	children,
}) => {
	const { category } = useParams();

	return (
		<Link
			href={`/${children}?page=1`}
			className={classNames(styles['link'], {
				[styles['active']]: category === children,
			})}
		>
			{children}
		</Link>
	);
};
