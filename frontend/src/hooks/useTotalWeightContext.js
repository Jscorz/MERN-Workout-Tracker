import { TotalWeightContext } from "../context/TotalWeightContext";
import { useContext } from "react";

export const useTotalWeightContext = () => {
	const context = useContext(TotalWeightContext);

	if (!context) {
		throw Error(
			"useTotalWeightContext must be used inside an TotalWeightContextProvider"
		);
	}

	return context;
};
