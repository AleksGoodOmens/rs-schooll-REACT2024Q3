import useGetData from '../../hooks/useGetData';

const Tabs = () => {
	const { isLoading, data } = useGetData();

	return (
		<>
			{isLoading && <div>tabs Loading...</div>}
			{data && <div>data is Loaded</div>}
		</>
	);
};

export default Tabs;
