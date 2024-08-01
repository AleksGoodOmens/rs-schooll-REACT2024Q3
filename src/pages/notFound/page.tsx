import { useRouter } from 'next/router';

import styles from './styles.module.css';

const NotFoundPage = () => {
	const navigate = useRouter();
	return (
		<div className={styles['wrapper']}>
			<h1>page not found</h1>
			<button onClick={() => navigate.push('/main')}>
				Go back to your journey
			</button>
		</div>
	);
};

export default NotFoundPage;
