import React from "react";

const useCalculateTigerWeight = (totalWeight) => {
	const avgTigerWeight = 450;
	return (totalWeight / avgTigerWeight).toFixed(1);
};

export default useCalculateTigerWeight;
