import { useState } from "react";

const WorkoutForm = () => {
	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState("");

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
		}
		if (response.ok) {
			setTitle("");
			setLoad("");
			setReps("");
			setError(null);
			console.log(json);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3 className='text-xl my-5 text-slate-900'>Add a New Workout</h3>
			<label className='block'>Exercise Title:</label>
			<input
				type='text'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				className='block p-3 mt-5 mb-5 w-full border rounded-md '
			/>
			<label className='block'>Weight (in lbs):</label>
			<input
				type='number'
				onChange={(e) => setLoad(e.target.value)}
				value={load}
				className='block p-3 mt-2 mb-5 w-full border rounded-md'
			/>
			<label className='block'>Reps:</label>
			<input
				type='number'
				onChange={(e) => setReps(e.target.value)}
				value={reps}
				className='block p-3 mt-2 mb-5 w-full border rounded-md'
			/>
			<button className='bg-primary py-2 px-5 rounded-md border border-transparent cursor-pointer transition duration-300 hover:bg-secondary hover:text-slate-900 uppercase'>
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
