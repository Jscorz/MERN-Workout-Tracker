import { MdDeleteForever } from "react-icons/md";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";
import { workoutsReducer } from "../context/WorkoutsContext";
import moment from "moment";

const WorkoutDetails = ({ workout }) => {
	const { dispatch, workouts } = useWorkoutsContext();
	const { user } = useAuthContext();

	let hours = moment().diff(moment(workout.createdAt), "hours");
	let hoursWorkouts = workouts.filter(
		(workout) => moment().diff(moment(workout.createdAt), "hours") < 24
	);
	let days = moment().diff(moment(workout.createdAt), "days");

	console.log(days, hours, hoursWorkouts);

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
		<div className='gradient flex flex-col  items-center space-y-1 bg-primary rounded-md my-16 mx-auto p-8 relative shadow-md md:items-start'>
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
			<div></div>
		</div>
	);
};

export default WorkoutDetails;
