import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
	const { dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();

	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState("");
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError("You must be logged in");
			return;
		}

		const workout = { title, load, reps };

		const response = await fetch("/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setTitle("");
			setLoad("");
			setReps("");
			setError(null);
			setEmptyFields([]);
			dispatch({ type: "CREATE_WORKOUT", payload: json });
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='h-[32rem] border-2 bg-slate-800 border-purple-500 col-span-2 mt-10 p-8 rounded-lg workout-form'
		>
			<h3 className='text-xl my-5 text-[#f1f1f1] font-bold'>Add a New Workout</h3>
			<label className='block text-[#f1f1f1]'>Exercise Title:</label>
			<input
				type='text'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				className={
					emptyFields.includes("title")
						? "text-black border-red-500 block p-2 mt-5 mb-5 w-full border rounded-md"
						: "block p-2 mt-5 mb-5 w-full border rounded-md "
				}
			/>
			<label className='block text-[#f1f1f1]'>Weight (in lbs):</label>
			<input
				type='number'
				onChange={(e) => setLoad(e.target.value)}
				value={load}
				className={
					emptyFields.includes("load")
						? " border-red-500 block p-2 mt-5 mb-5 w-full border rounded-md"
						: "block p-2 mt-5 mb-5 w-full border rounded-md "
				}
			/>
			<label className='block text-[#f1f1f1]'>Reps:</label>
			<input
				type='number'
				onChange={(e) => setReps(e.target.value)}
				value={reps}
				className={
					emptyFields.includes("reps")
						? "text-slate-900 border-red-500 block p-2 mt-5 mb-5 w-full border rounded-md"
						: "block p-2 mt-5 mb-5 w-full border rounded-md "
				}
			/>
			<button className=' bg-purple-500 text-white py-2 px-5 rounded-md border border-slate-900 cursor-pointer transition duration-300 hover:bg-purple-600'>
				Add Workout
			</button>
			{error && (
				<div className='p-5 bg-offWhiteTwo border border-red-400 my-6 rounded-md text-red-400'>
					{error}
				</div>
			)}
		</form>
	);
};

export default WorkoutForm;
