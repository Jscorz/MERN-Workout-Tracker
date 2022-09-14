const useCalculateCrocodileWeight = (totalWeight) => {
	const avgCrocodileWeight = 2500;
	return (totalWeight / avgCrocodileWeight).toFixed(1);
};

export default useCalculateCrocodileWeight;
