import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const GenerateWorkout = () => {
	const { workouts, dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();
	const API_KEY = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": API_KEY,
				"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
			},
		};

		fetch("https://exercisedb.p.rapidapi.com/exercises", options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
		if (user) {
		}
	}, []);

	return (
		<div className='h-full border-2 border-slate-600'>GenerateWorkout</div>
	);
};

export default GenerateWorkout;
