'use client';
import classNames from 'classnames';
import styles from './styles.module.css';
import { FunctionComponent, ReactNode } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface NavCategoryProps {
	children: ReactNode;
}

export const NavCategory: FunctionComponent<NavCategoryProps> = ({
	children,
}) => {
	const router = useRouter();
	const { category } = useParams();

	const handleNavigate = () => {
		router.push(`/${children}?page=1`);
	};

	return (
		<button
			className={classNames(styles['link'], {
				[styles['active']]: category === children,
			})}
			onClick={handleNavigate}
		>
			{children}
		</button>
	);
};

// todo routing
// todo change category on click
