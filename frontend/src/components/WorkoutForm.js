import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
	const { dispatch } = useWorkoutsContext();

	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState("");
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const workout = { title, load, reps };

		const response = await fetch("/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
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
			console.log(json);
			dispatch({ type: "CREATE_WORKOUT", payload: json });
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3 className='text-xl my-5 text-slate-900 font-bold'>
				Add a New Workout
			</h3>
			<label className='block'>Exercise Title:</label>
			<input
				type='text'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				className={
					emptyFields.includes("title")
						? "border-red-500 block p-2 mt-5 mb-5 w-full border rounded-md"
						: "block p-2 mt-5 mb-5 w-full border rounded-md "
				}
			/>
			<label className='block'>Weight (in lbs):</label>
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
			<label className='block'>Reps:</label>
			<input
				type='number'
				onChange={(e) => setReps(e.target.value)}
				value={reps}
				className={
					emptyFields.includes("reps")
						? "border-red-500 block p-2 mt-5 mb-5 w-full border rounded-md"
						: "block p-2 mt-5 mb-5 w-full border rounded-md "
				}
			/>
			<button className='bg-cyan-700 text-white py-2 px-5 rounded-md border border-transparent cursor-pointer transition duration-300 hover:bg-primary hover:text-slate-900 uppercase'>
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
