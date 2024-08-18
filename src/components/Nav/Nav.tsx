import cn from 'classnames';

import navStyles from './Nav.module.css';
import { INav } from './Nav.types';
import { NavLink } from 'react-router-dom';

export const Nav = ({ className }: INav) => {
	const links = ['uncontrolled', 'controlled'];
	return (
		<nav className={cn(className, navStyles['nav'])}>
			{links.map((l) => (
				<NavLink
					className={cn(navStyles['link'])}
					key={l}
					to={l}
				>
					{l} form
				</NavLink>
			))}
			<NavLink
				className={cn(navStyles['link'])}
				to="/main"
			>
				Home
			</NavLink>
		</nav>
	);
};
