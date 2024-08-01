import { FunctionComponent, ReactNode, useContext } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import { ThemeContext } from '@/pages/_app';
import classNames from 'classnames';

interface AppLayoutProps {
	children: ReactNode;
}

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
	const theme = useContext(ThemeContext);

	return (
		<div className={classNames('wrapper', theme.value)}>
			<Header />
			<main className='main'>{children}</main>
			<Footer />
		</div>
	);
};

export default AppLayout;
