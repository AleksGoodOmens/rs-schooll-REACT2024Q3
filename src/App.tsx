import { Outlet } from 'react-router-dom';
import './App.css';
import { Nav } from './components';
import { HTag } from './components/HTag/HTag';
import { Provider } from 'react-redux';
import { setupStore } from './store';

function App() {
	return (
		<Provider store={setupStore()}>
			<Nav />
			<HTag value={1}>Welcome to week 7 - forms task</HTag>
			<main>
				<Outlet />
			</main>
		</Provider>
	);
}

export default App;
