import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTotalWeightContext } from "../hooks/useTotalWeightContext";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import TotalWeightModal from "../components/TotalWeightModal";

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();
	const { totalWeight } = useTotalWeightContext();

	const [isTotalWeightModalOpen, setIsTotalWeightModalOpen] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsTotalWeightModalOpen(true);
		}, 3000);
	}, []);

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
			<button
				className='py-3 px-6 border-2 border-slate-800 rounded-lg transition hover:bg-slate-900/25'
				onClick={() => setIsTotalWeightModalOpen(true)}
			>
				open modal
			</button>
			{isTotalWeightModalOpen && (
				<TotalWeightModal
					onRequestClose={() => setIsTotalWeightModalOpen(false)}
				/>
			)}
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
