import { FunctionComponent, ReactNode, useContext } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import classNames from 'classnames';
import { ThemeContext } from '../../pages/_app';

interface AppLayoutProps {
	children: ReactNode;
}

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
	const theme = useContext(ThemeContext);

	return (
		<div className={classNames('wrapper', theme.value)}>
			<Header />
			<main className="main">{children}</main>
			<Footer />
		</div>
	);
};

export default AppLayout;
