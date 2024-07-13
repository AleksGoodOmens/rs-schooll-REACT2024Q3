import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

const NotFoundPage = () => {
	const navigate = useNavigate();
	return (
		<div className={styles['wrapper']}>
			<h1>page not found</h1>
			<button onClick={() => navigate('/')}>Go back to your journey</button>
		</div>
	);
};

export default NotFoundPage;
