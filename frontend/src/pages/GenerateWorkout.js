import React, { useState, useEffect } from "react";

const GenerateWorkout = () => {
	const API_KEY = process.env.REACT_APP_API_KEY;

	const [absExercises, setAbsExercises] = useState();
	const [pectoralsExercises, setPectoralsExercises] = useState();
	const [backExercises, setBackExercises] = useState();
	const [trapsExercises, setTrapsExercises] = useState();
	const [bicepsExercises, setBicepsExercises] = useState();
	const [tricepsExercises, setTricepsExercises] = useState();
	const [calvesExercises, setCalvesExercises] = useState();
	const [quadsExercises, setQuadsExercises] = useState();
	const [hamstringsExercises, setHamstringsExercises] = useState();

	const [filterValue, setFilterValue] = useState();
	const [activeButton, setActiveButton] = useState(0);
	const [activeButtonTwo, setActiveButtonTwo] = useState(0);

	const [
		randomStrengthAndPowerNumberOne,
		setRandomStrengthAndPowerNumberOne,
	] = useState("");
	const [
		randomStrengthAndPowerNumberTwo,
		setRandomStrengthAndPowerNumberTwo,
	] = useState("");
	const [
		randomStrengthAndPowerNumberThree,
		setRandomStrengthAndPowerNumberThree,
	] = useState("");
	const [
		randomStrengthAndPowerNumberFour,
		setRandomStrengthAndPowerNumberFour,
	] = useState("");
	const [
		randomStrengthAndPowerNumberFive,
		setRandomStrengthAndPowerNumberFive,
	] = useState("");
	const [
		randomStrengthAndPowerNumberSix,
		setRandomStrengthAndPowerNumberSix,
	] = useState("");

	const [
		randomGrowthAndHypertrophyNumberOne,
		setRandomGrowthAndHypertrophyNumberOne,
	] = useState("");
	const [
		randomGrowthAndHypertrophyNumberTwo,
		setRandomGrowthAndHypertrophyNumberTwo,
	] = useState("");
	const [
		randomGrowthAndHypertrophyNumberThree,
		setRandomGrowthAndHypertrophyNumberThree,
	] = useState("");
	const [
		randomGrowthAndHypertrophyNumberFour,
		setRandomGrowthAndHypertrophyNumberFour,
	] = useState("");
	const [
		randomGrowthAndHypertrophyNumberFive,
		setRandomGrowthAndHypertrophyNumberFive,
	] = useState("");
	const [
		randomGrowthAndHypertrophyNumberSix,
		setRandomGrowthAndHypertrophyNumberSix,
	] = useState("");

	const [
		randomCardioAndEnduranceNumberOne,
		setRandomCardioAndEnduranceNumberOne,
	] = useState("");
	const [
		randomCardioAndEnduranceNumberTwo,
		setRandomCardioAndEnduranceNumberTwo,
	] = useState("");
	const [
		randomCardioAndEnduranceNumberThree,
		setRandomCardioAndEnduranceNumberThree,
	] = useState("");
	const [
		randomCardioAndEnduranceNumberFour,
		setRandomCardioAndEnduranceNumberFour,
	] = useState("");
	const [
		randomCardioAndEnduranceNumberFive,
		setRandomCardioAndEnduranceNumberFive,
	] = useState("");
	const [
		randomCardioAndEnduranceNumberSix,
		setRandomCardioAndEnduranceNumberSix,
	] = useState("");

	const HandleClick = (e) => {
		e.preventDefault();
		let activeButtonNumber = e.target.id;

		setActiveButton(activeButtonNumber);
	};

	const HandleClickTwo = (e) => {
		e.preventDefault();
		let activeButtonNumber = e.target.id;

		setActiveButtonTwo(activeButtonNumber);
	};

	const generateGrowthReps = () => {
		setRandomGrowthAndHypertrophyNumberOne(
			Math.trunc(Math.random() * 4 + 8)
		);
		setRandomGrowthAndHypertrophyNumberTwo(
			Math.trunc(Math.random() * 4 + 8)
		);
		setRandomGrowthAndHypertrophyNumberThree(
			Math.trunc(Math.random() * 4 + 8)
		);
		setRandomGrowthAndHypertrophyNumberFour(
			Math.trunc(Math.random() * 4 + 8)
		);
		setRandomGrowthAndHypertrophyNumberFive(
			Math.trunc(Math.random() * 4 + 8)
		);
		setRandomGrowthAndHypertrophyNumberSix(
			Math.trunc(Math.random() * 4 + 8)
		);
	};

	const generateStrengthReps = () => {
		setRandomStrengthAndPowerNumberOne(Math.trunc(Math.random() * 4 + 3));
		setRandomStrengthAndPowerNumberTwo(Math.trunc(Math.random() * 4 + 3));
		setRandomStrengthAndPowerNumberThree(Math.trunc(Math.random() * 4 + 3));
		setRandomStrengthAndPowerNumberFour(Math.trunc(Math.random() * 4 + 3));
		setRandomStrengthAndPowerNumberFive(Math.trunc(Math.random() * 4 + 3));
		setRandomStrengthAndPowerNumberSix(Math.trunc(Math.random() * 4 + 3));
	};

	const generateEnduranceReps = () => {
		setRandomCardioAndEnduranceNumberOne(
			Math.trunc(Math.random() * 4 + 12)
		);
		setRandomCardioAndEnduranceNumberTwo(
			Math.trunc(Math.random() * 4 + 12)
		);
		setRandomCardioAndEnduranceNumberThree(
			Math.trunc(Math.random() * 4 + 12)
		);
		setRandomCardioAndEnduranceNumberFour(
			Math.trunc(Math.random() * 4 + 12)
		);
		setRandomCardioAndEnduranceNumberFive(
			Math.trunc(Math.random() * 4 + 12)
		);
		setRandomCardioAndEnduranceNumberSix(
			Math.trunc(Math.random() * 4 + 12)
		);
	};

	const HandleSubmit = (e) => {
		e.preventDefault();

		if (activeButton === "1") {
			console.log(
				`workout-type:individual bodypart:${filterValue} goals:${activeButtonTwo}`
			);
		}
		if (activeButton === "2") {
			console.log(
				`workout-type:upper/lower bodypart:${filterValue} goals:${activeButtonTwo}`
			);
		}
		if (activeButton === "3") {
			console.log(
				`workout-type:bro split bodypart:${filterValue} goals:${activeButtonTwo}`
			);
		}
		if (activeButton === "4") {
			console.log(
				`workout-type:bodybuilder bodypart:${filterValue} goals:${activeButtonTwo}`
			);
		}

		console.log(
			"generate workout success    ",
			`strength reps:`,
			randomStrengthAndPowerNumberOne,
			randomStrengthAndPowerNumberTwo,
			randomStrengthAndPowerNumberThree,
			randomStrengthAndPowerNumberFour,
			randomStrengthAndPowerNumberFive,
			randomStrengthAndPowerNumberSix,
			`growth reps:`,
			randomGrowthAndHypertrophyNumberOne,
			randomGrowthAndHypertrophyNumberTwo,
			randomGrowthAndHypertrophyNumberThree,
			randomGrowthAndHypertrophyNumberFour,
			randomGrowthAndHypertrophyNumberFive,
			randomGrowthAndHypertrophyNumberSix,
			`endurance reps:`,
			randomCardioAndEnduranceNumberOne,
			randomCardioAndEnduranceNumberTwo,
			randomCardioAndEnduranceNumberThree,
			randomCardioAndEnduranceNumberFour,
			randomCardioAndEnduranceNumberFive,
			randomCardioAndEnduranceNumberSix
		);
	};

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
		// // Fetch Upper Back Exercises
		// fetch(
		// 	"https://exercisedb.p.rapidapi.com/exercises/target/upper%20back",
		// 	options
		// )
		// 	.then((response) => response.json())
		// 	.then((response) => setBackExercises(response))
		// 	.catch((err) => console.error(err));
		// // Fetch Traps Exercises
		// fetch(
		// 	"https://exercisedb.p.rapidapi.com/exercises/target/traps",
		// 	options
		// )
		// 	.then((response) => response.json())
		// 	.then((response) => setTrapsExercises(response))
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

	useEffect(() => {
		generateStrengthReps();
		generateGrowthReps();
		generateEnduranceReps();
	}, []);

	return (
		<section className='h-full mt-10 mb-20 flex flex-col space-y-10 items-center'>
			<div className='w-full flex items-center max-w-prose gap-3'>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
				<h2 className='uppercase text-center select-none text-slate-900 text-lg md:text-3xl'>
					Step 1. workout type
				</h2>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
			</div>
			<div className='flex w-full max-w-prose '>
				<button
					id='1'
					onClick={HandleClick}
					className={
						activeButton === "1"
							? "options w-[25%] p-4 bg-white text-slate-900 uppercase rounded-tl-lg rounded-bl-lg transition hover:bg-opacity-80"
							: "options w-[25%] p-4 bg-slate-800 text-white uppercase rounded-tl-lg rounded-bl-lg transition hover:bg-opacity-80"
					}
				>
					Individual
				</button>
				<button
					id='2'
					onClick={HandleClick}
					className={
						activeButton === "2"
							? "options w-[25%] p-4 bg-white text-slate-900 uppercase transition hover:bg-opacity-80"
							: "options w-[25%] p-4 bg-slate-800 text-white uppercase transition hover:bg-opacity-80"
					}
				>
					Upper/Lower
				</button>
				<button
					id='3'
					onClick={HandleClick}
					className={
						activeButton === "3"
							? "options w-[25%] p-4 bg-white text-slate-900 uppercase transition hover:bg-opacity-80"
							: "options w-[25%] p-4 bg-slate-800 text-white uppercase transition hover:bg-opacity-80"
					}
				>
					Bro Split
				</button>
				<button
					id='4'
					onClick={HandleClick}
					className={
						activeButton === "4"
							? "options w-[25%] p-4 bg-white text-slate-900 uppercase rounded-tr-lg rounded-br-lg transition hover:bg-opacity-80"
							: "options w-[25%] p-4 bg-slate-800 text-white uppercase rounded-tr-lg rounded-br-lg transition hover:bg-opacity-80"
					}
				>
					Bodybuilder
				</button>
			</div>
			<div className='w-full flex items-center max-w-prose gap-3'>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
				<h2 className='uppercase text-center select-none text-slate-900 text-lg md:text-3xl'>
					Step 2. muscle group
				</h2>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
			</div>
			<div className='flex w-full max-w-prose'>
				<form className='w-full'>
					<select
						onChange={(e) => setFilterValue(e.target.value)}
						value={filterValue}
						className='w-[100%] bg-slate-800 text-white text-center uppercase p-4 transition hover:bg-opacity-80 cursor-pointer rounded-lg'
					>
						<option value='Select muscle group'>
							Please Select muscle group
						</option>
						<option
							className='p-4 bg-white text-slate-900'
							value='abs'
						>
							abs
						</option>
						<option
							className='p-4 bg-white text-slate-900'
							value='pectorals'
						>
							pectorals
						</option>
						<option
							className='p-4 bg-white text-slate-900'
							value='back'
						>
							back
						</option>
						<option
							className='p-4 bg-white text-slate-900'
							value='traps'
						>
							traps
						</option>
						<option
							className='p-4 bg-white text-slate-900'
							value='biceps'
						>
							biceps
						</option>
						<option
							className='p-4 bg-white text-slate-900'
							value='calves'
						>
							calves
						</option>
						<option
							className='p-4 bg-white text-slate-900'
							value='quads'
						>
							quads
						</option>
						<option
							className='p-4 bg-white text-slate-900'
							value='hamstrings'
						>
							hamstrings
						</option>
					</select>
				</form>
			</div>
			<div className='w-full flex items-center max-w-prose gap-3'>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
				<h2 className='uppercase text-center select-none text-slate-900 text-lg md:text-3xl'>
					Step 3. Goals and Objectives
				</h2>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
			</div>
			<div className='flex flex-col w-full max-w-prose'>
				<button
					id='1'
					onClick={HandleClickTwo}
					className={
						activeButtonTwo === "1"
							? "options_step-2 w-full mt-4 p-4 bg-white text-slate-900 uppercase rounded-lg transition hover:bg-opacity-80"
							: "options_step-2 w-full mt-4 p-4 bg-slate-800 text-white uppercase rounded-lg transition hover:bg-opacity-80"
					}
				>
					Strength And Power
				</button>
				<button
					id='2'
					onClick={HandleClickTwo}
					className={
						activeButtonTwo === "2"
							? "options_step-2 w-full mt-4 p-4 bg-white text-slate-900 uppercase rounded-lg transition hover:bg-opacity-80"
							: "options_step-2 w-full mt-4 p-4 bg-slate-800 text-white uppercase rounded-lg transition hover:bg-opacity-80"
					}
				>
					Growth And Hypertrophy
				</button>
				<button
					id='3'
					onClick={HandleClickTwo}
					className={
						activeButtonTwo === "3"
							? "options_step-2 w-full mt-4 p-4 bg-white text-slate-900 uppercase rounded-lg transition hover:bg-opacity-80"
							: "options_step-2 w-full mt-4 p-4 bg-slate-800 text-white uppercase rounded-lg transition hover:bg-opacity-80"
					}
				>
					Cardiovascular And Endurance
				</button>
			</div>
			<button
				onClick={HandleSubmit}
				className='py-3 px-16 border-slate-500 border mx-auto gradient rounded-lg transition hover:bg-slate-700 hover:text-white hover:border-white'
			>
				Generate Workout
			</button>
		</section>
	);
};

export default GenerateWorkout;
