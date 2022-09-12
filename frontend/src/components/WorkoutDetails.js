import { MdDeleteForever } from "react-icons/md";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();

	const handleClick = async () => {
		if (!user) {
			return;
		}
		const response = await fetch("/api/workouts/" + workout._id, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: json });
		}
	};

	return (
		<div className='gradient flex flex-col  items-center space-y-1 bg-primary rounded-md my-10 mx-auto p-8 relative shadow-md md:items-start'>
			<h4 className=' text-xl text-primary mb-3 font-bold capitalize'>
				{workout.title}
			</h4>
			<p className='text-md text-slate-800'>
				<strong>Weight (lbs): </strong>
				{workout.load}
			</p>
			<p className='text-md text-slate-800'>
				<strong>Reps: </strong>
				{workout.reps}
			</p>
			<p className='text-md text-slate-800'>
				{formatDistanceToNow(new Date(workout.createdAt), {
					addSuffix: true,
				})}
			</p>
			<span>
				<MdDeleteForever
					onClick={handleClick}
					className='text-3xl text-gray-600 cursor-pointer absolute top-10 right-10'
				/>
			</span>
		</div>
	);
};

export default WorkoutDetails;
