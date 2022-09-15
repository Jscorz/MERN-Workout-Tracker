import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutContext";
import { useTotalWeightContext } from "./useTotalWeightContext";

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: workoutsDispatch } = useWorkoutsContext();
	const { dispatch: totalWeightDispatch } = useTotalWeightContext();

	const logout = () => {
		// remove user from storage
		localStorage.removeItem("user");

		// dispatch logout action
		dispatch({ type: "LOGOUT" });
		workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
		totalWeightDispatch({ type: "SET_TOTAL_WEIGHT", payload: null });
	};
	return { logout };
};
