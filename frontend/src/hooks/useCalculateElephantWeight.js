const useCalculateElephantWeight = (totalWeight) => {
	const avgElephantWeight = 6000;
	return (totalWeight / avgElephantWeight).toFixed(1);
};

export default useCalculateElephantWeight;
