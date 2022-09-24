const useCalculateMotorcycleWeight = (totalWeight) => {
	const avgMotorcycleWeight = 400;
	return (totalWeight / avgMotorcycleWeight).toFixed(1);
};

export default useCalculateMotorcycleWeight;
