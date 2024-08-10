const getId = (s: string) => {
	return s.match(/\d+/g)?.join() || '';
};

export default getId;
