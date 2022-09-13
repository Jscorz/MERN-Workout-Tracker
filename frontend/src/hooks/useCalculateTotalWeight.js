const useCalculateTotalWeight = (filteredWorkouts) => {
	let totalWeight = 0;

	filteredWorkouts.forEach((element) => {
		totalWeight += Number(element.reps) * Number(element.load);
	});

	return totalWeight;
};

export default useCalculateTotalWeight;
