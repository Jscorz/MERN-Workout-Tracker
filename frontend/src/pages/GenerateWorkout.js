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
		// // Fetch Abs Exercises
		// fetch("https://exercisedb.p.rapidapi.com/exercises/target/abs", options)
		// 	.then((response) => response.json())
		// 	.then((response) => setAbsExercises(response))
		// 	.catch((err) => console.error(err));
		// // Fetch Pectorals Exercises
		// fetch(
		// 	"https://exercisedb.p.rapidapi.com/exercises/target/pectorals",
		// 	options
		// )
		// 	.then((response) => response.json())
		// 	.then((response) => setPectoralsExercises(response))
		// 	.catch((err) => console.error(err));
		// // Fetch Biceps Exercises
		// fetch(
		// 	"https://exercisedb.p.rapidapi.com/exercises/target/biceps",
		// 	options
		// )
		// 	.then((response) => response.json())
		// 	.then((response) => setBicepsExercises(response))
		// 	.catch((err) => console.error(err));
		// // Fetch Triceps Exercises
		// fetch(
		// 	"https://exercisedb.p.rapidapi.com/exercises/target/triceps",
		// 	options
		// )
		// 	.then((response) => response.json())
		// 	.then((response) => setTricepsExercises(response))
		// 	.catch((err) => console.error(err));
		// // Fetch Calves Exercises
		// fetch(
		// 	"https://exercisedb.p.rapidapi.com/exercises/target/calves",
		// 	options
		// )
		// 	.then((response) => response.json())
		// 	.then((response) => setCalvesExercises(response))
		// 	.catch((err) => console.error(err));
		// // Fetch Quads Exercises
		// fetch(
		// 	"https://exercisedb.p.rapidapi.com/exercises/target/quads",
		// 	options
		// )
		// 	.then((response) => response.json())
		// 	.then((response) => setQuadsExercises(response))
		// 	.catch((err) => console.error(err));
		// // Fetch Hamstring Exercises
		// fetch(
		// 	"https://exercisedb.p.rapidapi.com/exercises/target/hamstrings",
		// 	options
		// )
		// 	.then((response) => response.json())
		// 	.then((response) => setHamstringsExercises(response))
		// 	.catch((err) => console.error(err));
	}, []);

	return (
		<section className='h-full border-2 border-slate-600 flex flex-col space-y-10 items-center'>
			<button className='py-3 px-16 border-red-500 border mx-auto gradient'>
				Generate Workout
			</button>
			<div className='w-full flex items-center max-w-prose gap-3'>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
				<h2 className='uppercase text-center select-none text-slate-900 text-lg md:text-3xl'>
					Step 1. workout type
				</h2>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
			</div>
			<div className='flex w-full max-w-prose'>
				<button className='w-[25%] p-4 bg-slate-800 text-white uppercase transition hover:bg-opacity-80'>
					Individual
				</button>
				<button className='w-[25%] p-4 bg-slate-800 text-white uppercase transition hover:bg-opacity-80'>
					Upper/Lower
				</button>
				<button className='w-[25%] p-4 bg-slate-800 text-white uppercase transition hover:bg-opacity-80'>
					Bro Split
				</button>
				<button className='w-[25%] p-4 bg-slate-800 text-white uppercase transition hover:bg-opacity-80'>
					Bodybuilder
				</button>
			</div>
		</section>
	);
};

export default GenerateWorkout;
