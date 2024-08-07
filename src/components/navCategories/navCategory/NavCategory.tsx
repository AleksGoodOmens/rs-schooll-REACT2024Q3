import classNames from 'classnames';
import styles from './styles.module.css';
import { FunctionComponent, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface NavCategoryProps {
	children: ReactNode;
	isActive?: boolean;
}

const NavCategory: FunctionComponent<NavCategoryProps> = ({
	children,
	isActive,
}) => {
	const router = useRouter();

	const handleChangeCategory = () => {
		router.push(`/${children}?page=1&search=`);
	};

	return (
		<button
			onClick={handleChangeCategory}
			className={classNames(styles['link'], { [styles['active']]: isActive })}
		>
			{children}
		</button>
	);
};

export default NavCategory;
