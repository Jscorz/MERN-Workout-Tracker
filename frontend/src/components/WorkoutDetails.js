import { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import moment from "moment";
import useCalculateTotalWeight from "../hooks/useCalculateTotalWeight";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTotalWeightContext } from "../hooks/useTotalWeightContext";

const WorkoutDetails = ({ workout }) => {
	const { dispatch, workouts } = useWorkoutsContext();
	const { dispatch: totalWeightDispatch } = useTotalWeightContext();
	const { user } = useAuthContext();

	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState("");
	const [emptyFields, setEmptyFields] = useState([]);

	let hoursWorkouts = workouts.filter(
		(workout) => moment().diff(moment(workout.createdAt), "hours") < 24
	);

	let totalWeightLoad = useCalculateTotalWeight(hoursWorkouts);

	useEffect(() => {
		if (!user) {
			return;
		}
		totalWeightDispatch({
			type: "SET_TOTAL_WEIGHT",
			payload: totalWeightLoad,
		});
	}, []);

	const handleClickDelete = async () => {
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

	const handleClickEdit = async (e) => {
		e.preventDefault();

		setIsEditModalOpen(!isEditModalOpen);
		// if (!user) {
		// 	return;
		// }
		// const response = await fetch("/api/workouts/" + workout._id, {
		// 	method: "PATCH",
		// 	headers: {
		// 		Authorization: `Bearer ${user.token}`,
		// 	},
		// 	body: JSON.stringify({
		// 		title,
		// 		reps,
		// 		load,
		// 	}),
		// });
		// const json = await response.json();

		// if (response.ok) {
		// 	dispatch({ type: "DELETE_WORKOUT", payload: json });
		// }
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
					onClick={handleClickDelete}
					className='text-3xl text-gray-600 cursor-pointer absolute top-10 right-10'
				/>
			</span>

			<span>
				<AiFillEdit
					onClick={handleClickEdit}
					className='text-3xl text-gray-600 cursor-pointer absolute top-20 right-10'
				/>
			</span>
			{isEditModalOpen && (
				<form className='flex flex-col space-y-2 p-2 border-2 bg-slate-700 absolute -top-2 left-0 right-20 rounded-lg'>
					<h3 className='text-white text-xl pb-2'>Edit Workout</h3>
					<label className='block text-white'>Exercise Title:</label>
					<input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className={
							emptyFields.includes("title")
								? "text-slate-900 border-red-500 border rounded-md p-1"
								: "block  border rounded-md p-1 "
						}
					/>
					<label className='block text-white'>Weight (in lbs):</label>
					<input
						type='text'
						value={load}
						onChange={(e) => setLoad(e.target.value)}
						className={
							emptyFields.includes("load")
								? "text-slate-900 border-red-500 border rounded-md p-1"
								: "block  border rounded-md p-1 "
						}
					/>
					<label className='block text-white'>Reps:</label>
					<input
						type='text'
						value={reps}
						onChange={(e) => setReps(e.target.value)}
						className={
							emptyFields.includes("reps")
								? "text-slate-900 border-red-500 border rounded-md p-1"
								: "block  border rounded-md p-1"
						}
					/>
					<div className='pt-3'>
						<button className='text-slate-900 bg-green-400 rounded-md py-2 px-4 w-full'>
							Edit Workout
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default WorkoutDetails;
