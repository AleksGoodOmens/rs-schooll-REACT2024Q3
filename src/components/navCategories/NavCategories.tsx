import NavCategory from './navCategory/NavCategory';
import styles from './styles.module.css';

const NavCategories = ({
	categories,
	active,
}: {
	categories: string[] | undefined;
	active?: string;
}) => {
	if (!categories) return null;

	return (
		<nav className={styles['flex']}>
			{categories.map((cat) => (
				<NavCategory
					isActive={cat === active}
					key={cat}
				>
					{cat}
				</NavCategory>
			))}
		</nav>
	);
};
export default NavCategories;
