import { fetchCategories } from '../../app/actions';
import { NavCategory } from './navCategory/NavCategory';
import styles from './styles.module.css';

export const NavCategories = async () => {
	const categories = await fetchCategories();
	if (!categories) return <div>no categories</div>;

	if (Array.isArray(categories))
		return (
			<nav className={styles['flex']}>
				{categories.map((cat) => (
					<NavCategory key={cat}>{cat}</NavCategory>
				))}
			</nav>
		);
	if (categories?.message) return <div>{categories.message}</div>;
};
