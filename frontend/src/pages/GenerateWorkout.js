import React, { useState, useEffect } from "react";

const GenerateWorkout = () => {
	const API_KEY = process.env.REACT_APP_API_KEY;

	const [absExercises, setAbsExercises] = useState();
	const [pectoralsExercises, setPectoralsExercises] = useState();
	const [bicepsExercises, setBicepsExercises] = useState();
	const [tricepsExercises, setTricepsExercises] = useState();
	const [calvesExercises, setCalvesExercises] = useState();
	const [quadsExercises, setQuadsExercises] = useState();
	const [hamstringsExercises, setHamstringsExercises] = useState();

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": API_KEY,
				"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
			},
		};
		// Fetch Abs Exercises
		fetch("https://exercisedb.p.rapidapi.com/exercises/target/abs", options)
			.then((response) => response.json())
			.then((response) => setAbsExercises(response))
			.catch((err) => console.error(err));
		// Fetch Pectorals Exercises
		fetch(
			"https://exercisedb.p.rapidapi.com/exercises/target/pectorals",
			options
		)
			.then((response) => response.json())
			.then((response) => setPectoralsExercises(response))
			.catch((err) => console.error(err));
		// Fetch Biceps Exercises
		fetch(
			"https://exercisedb.p.rapidapi.com/exercises/target/biceps",
			options
		)
			.then((response) => response.json())
			.then((response) => setBicepsExercises(response))
			.catch((err) => console.error(err));
		// Fetch Triceps Exercises
		fetch(
			"https://exercisedb.p.rapidapi.com/exercises/target/triceps",
			options
		)
			.then((response) => response.json())
			.then((response) => setTricepsExercises(response))
			.catch((err) => console.error(err));
		// Fetch Calves Exercises
		fetch(
			"https://exercisedb.p.rapidapi.com/exercises/target/calves",
			options
		)
			.then((response) => response.json())
			.then((response) => setCalvesExercises(response))
			.catch((err) => console.error(err));
		// Fetch Quads Exercises
		fetch(
			"https://exercisedb.p.rapidapi.com/exercises/target/quads",
			options
		)
			.then((response) => response.json())
			.then((response) => setQuadsExercises(response))
			.catch((err) => console.error(err));
		// Fetch Hamstring Exercises
		fetch(
			"https://exercisedb.p.rapidapi.com/exercises/target/hamstrings",
			options
		)
			.then((response) => response.json())
			.then((response) => setHamstringsExercises(response))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div
			onClick={console.log(
				absExercises,
				pectoralsExercises,
				bicepsExercises,
				tricepsExercises,
				calvesExercises,
				quadsExercises,
				hamstringsExercises
			)}
			className='h-full border-2 border-slate-600'
		>
			GenerateWorkout
		</div>
	);
};

export default GenerateWorkout;
