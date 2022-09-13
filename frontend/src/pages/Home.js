import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTotalWeightContext } from "../hooks/useTotalWeightContext";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();
	const { totalWeight } = useTotalWeightContext();
	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts", {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});

			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: json });
			}
		};
		if (user) {
			fetchWorkouts();
		}
	}, [dispatch, user]);

	return (
		<div>
			<h1 className='text-center p-3 border-2 border-slate-500 rounded-lg'>
				You have lifted {totalWeight}lbs in the last 24 hours
			</h1>
			<div className='md:grid md:grid-cols-4 md:gap-24'>
				<WorkoutForm />
				<div className='col-span-2 col-start-1 row-start-1'>
					{workouts &&
						workouts.map((workout) => (
							<WorkoutDetails
								key={workout._id}
								workout={workout}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Home;
