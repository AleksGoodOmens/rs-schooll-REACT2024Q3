import UseLocalStorage from '../../hooks/useLocalStorage';

const MainPage = () => {
	const { lStorage, setDataToLocalStorage, getDataFromLocalStorage } =
		UseLocalStorage('searchValue');

	console.log('rerender');
	return (
		<>
			<div className="wrapper">
				<h1>main page</h1>
				<button
					onClick={() => {
						setDataToLocalStorage('test', 'test');
					}}
				>
					click
				</button>
				<button onClick={() => getDataFromLocalStorage('test')}>
					getLocalStorage
				</button>
				<section>{lStorage}</section>
				<section></section>
			</div>
		</>
	);
};

export default MainPage;
