import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { HTag } from './components/HTag/HTag';
import { Provider } from 'react-redux';
import { setupStore } from './store';

function App() {
	return (
		<Provider store={setupStore()}>
			<Header />

			<main className="main">
				<HTag value={1}>Welcome to week 7 - forms task</HTag>
				<Outlet />
			</main>
			<Footer />
		</Provider>
	);
}

export default App;
