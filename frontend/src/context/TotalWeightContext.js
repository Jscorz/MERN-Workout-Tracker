import { createContext, useReducer } from "react";

export const TotalWeightContext = createContext();

export const totalWeightReducer = (state, action) => {
	switch (action.type) {
		case "SET_TOTAL_WEIGHT":
			return {
				totalWeight: action.payload,
			};
		default:
			return state;
	}
};

export const TotalWeightContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(totalWeightReducer, {
		totalWeight: null,
	});

	return (
		<TotalWeightContext.Provider value={{ ...state, dispatch }}>
			{children}
		</TotalWeightContext.Provider>
	);
};
