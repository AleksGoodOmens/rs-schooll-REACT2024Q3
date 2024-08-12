import { useRouter } from 'next/router';

import styles from './styles.module.css';

const Custom404 = () => {
	const router = useRouter();
	return (
		<div className={styles['center']}>
			<h1>page not found</h1>
			<button onClick={() => router.push('/')}>Go back to your journey</button>
		</div>
	);
};

export default Custom404;
