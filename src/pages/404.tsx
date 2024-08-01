import { useRouter } from 'next/router';

import styles from './styles.module.css';

const NotFoundPage = () => {
	const navigate = useRouter();
	return (
		<div className={styles['center']}>
			<h1>page not found</h1>
			<button onClick={() => navigate.push('/')}>
				Go back to your journey
			</button>
		</div>
	);
};

export default NotFoundPage;
