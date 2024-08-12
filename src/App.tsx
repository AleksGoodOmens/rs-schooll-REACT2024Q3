import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import { Input } from './components';
import { HTag } from './components/HTag/HTag';

function App() {
	return (
		<>
			<nav>
				<NavLink to={'uncontrolled'}>Uncontrolled form</NavLink>
				<NavLink to={'controlled'}>Controlled form</NavLink>
			</nav>
			<Input placeholder="test input" />

			<HTag value={1}>this is h1</HTag>
			<HTag value={2}>this is h2</HTag>
			<br />

			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
