import { FunctionComponent, ReactNode } from 'react';

interface BannerProps {
	children: ReactNode;
}

export const Banner: FunctionComponent<BannerProps> = ({ children }) => {
	return <div className="banner">{children}</div>;
};
