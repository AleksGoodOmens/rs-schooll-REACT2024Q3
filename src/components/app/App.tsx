// import { useEffect, useState } from 'react';
// import useGetData from '../../hooks/useGetData';
// import Loader from '../loader/loader';
// import ErrorTrigger from '../error/errorTrigger/ErrorTrigger';
// import SearchBar from '../searchBar/SearchBar';
// // import SearchResults from '../searchResults/SearchResults';
// import { Animations } from '../../interfaces/interfaces';
// import Tabs from '../tabs/Tabs';

// const App = () => {
// 	const { data, isLoading, fetchData } = useGetData();
// 	const [searchValue, setSearchValue] = useState<string>('');
// 	// const [fade, setFade] = useState<Animations>('');
// 	const [list, setList] = useState<string[]>([]);

// 	useEffect(() => {
// 		const changeItems = () => {
// 			try {
// 				setFade('fadeOut');
// 				setTimeout(() => {
// 					setFade('');
// 					fetchData();
// 				}, 500); // Wait for fade out animation to complete
// 			} catch (error) {
// 				console.error('Error fetching data:', error);
// 				setFade('fadeIn');
// 			}
// 		};
// 		changeItems();
// 	}, [fetchData, searchValue]);

// 	useEffect(() => {
// 		const listFromObject = Object.keys(data);
// 		setList(listFromObject);
// 	}, [data, isLoading]);

// 	console.log(list);
// 	return (
// 		<>
// 			<div className="wrapper">
// 				<section>
// 					<ErrorTrigger />
// 					<SearchBar
// 						searchValue={searchValue}
// 						setSearchValue={setSearchValue}
// 					/>
// 					<Tabs />
// 				</section>
// 				<section>
// 					{isLoading && <Loader />}

// 					{!isLoading && data.length === 0 && <h2>No data</h2>}

// 					{/* {!isLoading && data.length > 0 && (
// 						<SearchResults
// 							fade={fade}
// 							data={data}
// 						/>
// 					)} */}
// 				</section>
// 			</div>
// 		</>
// 	);
// };

// export default App;

// // const [searchValue, setSearchValue] = useState("")
// // const [fade, setFade] = useState("fadeIn")

// // useEffect(() => {
// // 	const prevSearch = window.localStorage.getItem('searchValue');

// // 	if (prevSearch) {
// // 		setSearchValue(prevSearch);
// // 	}
// // }, []);
