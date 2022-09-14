const useCalculateElephantWeight = (totalWeight) => {
	const avgElephantWeight = 16000;
	return (totalWeight / avgElephantWeight).toFixed(1);
};

export default useCalculateElephantWeight;
