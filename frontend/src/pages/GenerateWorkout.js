import React, { useState, useEffect } from "react";
import WorkoutModal from "../components/WorkoutModal";
import loadingIcon from "../assets/weights-icon-loader.png";

const GenerateWorkout = () => {
	const API_KEY = process.env.REACT_APP_API_KEY;

	// State values for exercises by body parts
	const [absExercises, setAbsExercises] = useState();
	const [pectoralsExercises, setPectoralsExercises] = useState();
	const [backExercises, setBackExercises] = useState();
	const [trapsExercises, setTrapsExercises] = useState();
	const [shouldersExercises, setShouldersExercises] = useState();
	const [bicepsExercises, setBicepsExercises] = useState();
	const [tricepsExercises, setTricepsExercises] = useState();
	const [calvesExercises, setCalvesExercises] = useState();
	const [quadsExercises, setQuadsExercises] = useState();
	const [hamstringsExercises, setHamstringsExercises] = useState();

	// State values for form values(workout-type, body-part, goals, objectives) + loading state
	const [activeButton, setActiveButton] = useState(0);
	const [filterValue, setFilterValue] = useState();
	const [activeButtonTwo, setActiveButtonTwo] = useState(0);
	const [loading, setLoading] = useState(false);

	// State value for Modal containing custom workout
	const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);

	// State values for six exercises for custom workout
	const [exerciseOne, setExerciseOne] = useState();
	const [exerciseTwo, setExerciseTwo] = useState();
	const [exerciseThree, setExerciseThree] = useState();
	const [exerciseFour, setExerciseFour] = useState();
	const [exerciseFive, setExerciseFive] = useState();
	const [exerciseSix, setExerciseSix] = useState();

	// State values for six exercises for custom workout
	const [exerciseSelectionOne, setExerciseSelectionOne] = useState(
		Math.trunc(Math.random() * 100 + 1)
	);
	const [exerciseSelectionTwo, setExerciseSelectionTwo] = useState(
		Math.trunc(Math.random() * 100 + 1)
	);
	const [exerciseSelectionThree, setExerciseSelectionThree] = useState(
		Math.trunc(Math.random() * 100 + 1)
	);
	const [exerciseSelectionFour, setExerciseSelectionFour] = useState(
		Math.trunc(Math.random() * 100 + 1)
	);
	const [exerciseSelectionFive, setExerciseSelectionFive] = useState(
		Math.trunc(Math.random() * 100 + 1)
	);
	const [exerciseSelectionSix, setExerciseSelectionSix] = useState(
		Math.trunc(Math.random() * 100 + 1)
	);

	// State values for rep amounts for Strength and Power
	const [randomStrengthAndPowerNumberOne, setRandomStrengthAndPowerNumberOne] = useState("");
	const [randomStrengthAndPowerNumberTwo, setRandomStrengthAndPowerNumberTwo] = useState("");
	const [randomStrengthAndPowerNumberThree, setRandomStrengthAndPowerNumberThree] = useState("");
	const [randomStrengthAndPowerNumberFour, setRandomStrengthAndPowerNumberFour] = useState("");
	const [randomStrengthAndPowerNumberFive, setRandomStrengthAndPowerNumberFive] = useState("");
	const [randomStrengthAndPowerNumberSix, setRandomStrengthAndPowerNumberSix] = useState("");

	// State values for rep amounts for Growth and Hypertrophy
	const [randomGrowthAndHypertrophyNumberOne, setRandomGrowthAndHypertrophyNumberOne] =
		useState("");
	const [randomGrowthAndHypertrophyNumberTwo, setRandomGrowthAndHypertrophyNumberTwo] =
		useState("");
	const [randomGrowthAndHypertrophyNumberThree, setRandomGrowthAndHypertrophyNumberThree] =
		useState("");
	const [randomGrowthAndHypertrophyNumberFour, setRandomGrowthAndHypertrophyNumberFour] =
		useState("");
	const [randomGrowthAndHypertrophyNumberFive, setRandomGrowthAndHypertrophyNumberFive] =
		useState("");
	const [randomGrowthAndHypertrophyNumberSix, setRandomGrowthAndHypertrophyNumberSix] =
		useState("");

	// State values for rep amounts for Cardio and Endurance
	const [randomCardioAndEnduranceNumberOne, setRandomCardioAndEnduranceNumberOne] = useState("");
	const [randomCardioAndEnduranceNumberTwo, setRandomCardioAndEnduranceNumberTwo] = useState("");
	const [randomCardioAndEnduranceNumberThree, setRandomCardioAndEnduranceNumberThree] =
		useState("");
	const [randomCardioAndEnduranceNumberFour, setRandomCardioAndEnduranceNumberFour] =
		useState("");
	const [randomCardioAndEnduranceNumberFive, setRandomCardioAndEnduranceNumberFive] =
		useState("");
	const [randomCardioAndEnduranceNumberSix, setRandomCardioAndEnduranceNumberSix] = useState("");

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

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const generateGrowthReps = () => {
		setRandomGrowthAndHypertrophyNumberOne(Math.trunc(Math.random() * 4 + 8));
		setRandomGrowthAndHypertrophyNumberTwo(Math.trunc(Math.random() * 4 + 8));
		setRandomGrowthAndHypertrophyNumberThree(Math.trunc(Math.random() * 4 + 8));
		setRandomGrowthAndHypertrophyNumberFour(Math.trunc(Math.random() * 4 + 8));
		setRandomGrowthAndHypertrophyNumberFive(Math.trunc(Math.random() * 4 + 8));
		setRandomGrowthAndHypertrophyNumberSix(Math.trunc(Math.random() * 4 + 8));
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
		setRandomCardioAndEnduranceNumberOne(Math.trunc(Math.random() * 4 + 12));
		setRandomCardioAndEnduranceNumberTwo(Math.trunc(Math.random() * 4 + 12));
		setRandomCardioAndEnduranceNumberThree(Math.trunc(Math.random() * 4 + 12));
		setRandomCardioAndEnduranceNumberFour(Math.trunc(Math.random() * 4 + 12));
		setRandomCardioAndEnduranceNumberFive(Math.trunc(Math.random() * 4 + 12));
		setRandomCardioAndEnduranceNumberSix(Math.trunc(Math.random() * 4 + 12));
	};

	const generateExerciseNumbers = () => {
		setExerciseSelectionOne(Math.trunc(Math.random() * 100 + 1));
		setExerciseSelectionTwo(Math.trunc(Math.random() * 100 + 1));
		setExerciseSelectionThree(Math.trunc(Math.random() * 100 + 1));
		setExerciseSelectionFour(Math.trunc(Math.random() * 100 + 1));
		setExerciseSelectionFive(Math.trunc(Math.random() * 100 + 1));
		setExerciseSelectionSix(Math.trunc(Math.random() * 100 + 1));
	};

	const HandleChange = (e) => {
		setFilterValue(e.target.value);
		if (e.target.value === "abs" && activeButton === "1") {
			setExerciseOne(absExercises[exerciseSelectionOne]);
			setExerciseTwo(absExercises[exerciseSelectionTwo]);
			setExerciseThree(absExercises[exerciseSelectionThree]);
			setExerciseFour(absExercises[exerciseSelectionFour]);
			setExerciseFive(absExercises[exerciseSelectionFive]);
			setExerciseSix(absExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "pectorals" && activeButton === "1") {
			setExerciseOne(pectoralsExercises[exerciseSelectionOne]);
			setExerciseTwo(pectoralsExercises[exerciseSelectionTwo]);
			setExerciseThree(pectoralsExercises[exerciseSelectionThree]);
			setExerciseFour(pectoralsExercises[exerciseSelectionFour]);
			setExerciseFive(pectoralsExercises[exerciseSelectionFive]);
			setExerciseSix(pectoralsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "back" && activeButton === "1") {
			setExerciseOne(backExercises[exerciseSelectionOne]);
			setExerciseTwo(backExercises[exerciseSelectionTwo]);
			setExerciseThree(backExercises[exerciseSelectionThree]);
			setExerciseFour(backExercises[exerciseSelectionFour]);
			setExerciseFive(backExercises[exerciseSelectionFive]);
			setExerciseSix(backExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "traps" && activeButton === "1") {
			setExerciseOne(trapsExercises[exerciseSelectionOne]);
			setExerciseTwo(trapsExercises[exerciseSelectionTwo]);
			setExerciseThree(trapsExercises[exerciseSelectionThree]);
			setExerciseFour(trapsExercises[exerciseSelectionFour]);
			setExerciseFive(trapsExercises[exerciseSelectionFive]);
			setExerciseSix(trapsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "shoulders" && activeButton === "1") {
			setExerciseOne(shouldersExercises[exerciseSelectionOne]);
			setExerciseTwo(shouldersExercises[exerciseSelectionTwo]);
			setExerciseThree(shouldersExercises[exerciseSelectionThree]);
			setExerciseFour(shouldersExercises[exerciseSelectionFour]);
			setExerciseFive(shouldersExercises[exerciseSelectionFive]);
			setExerciseSix(shouldersExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "biceps" && activeButton === "1") {
			setExerciseOne(bicepsExercises[exerciseSelectionOne]);
			setExerciseTwo(bicepsExercises[exerciseSelectionTwo]);
			setExerciseThree(bicepsExercises[exerciseSelectionThree]);
			setExerciseFour(bicepsExercises[exerciseSelectionFour]);
			setExerciseFive(bicepsExercises[exerciseSelectionFive]);
			setExerciseSix(bicepsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "triceps" && activeButton === "1") {
			setExerciseOne(tricepsExercises[exerciseSelectionOne]);
			setExerciseTwo(tricepsExercises[exerciseSelectionTwo]);
			setExerciseThree(tricepsExercises[exerciseSelectionThree]);
			setExerciseFour(tricepsExercises[exerciseSelectionFour]);
			setExerciseFive(tricepsExercises[exerciseSelectionFive]);
			setExerciseSix(tricepsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "calves" && activeButton === "1") {
			setExerciseOne(calvesExercises[exerciseSelectionOne]);
			setExerciseTwo(calvesExercises[exerciseSelectionTwo]);
			setExerciseThree(calvesExercises[exerciseSelectionThree]);
			setExerciseFour(calvesExercises[exerciseSelectionFour]);
			setExerciseFive(calvesExercises[exerciseSelectionFive]);
			setExerciseSix(calvesExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "quads" && activeButton === "1") {
			setExerciseOne(quadsExercises[exerciseSelectionOne]);
			setExerciseTwo(quadsExercises[exerciseSelectionTwo]);
			setExerciseThree(quadsExercises[exerciseSelectionThree]);
			setExerciseFour(quadsExercises[exerciseSelectionFour]);
			setExerciseFive(quadsExercises[exerciseSelectionFive]);
			setExerciseSix(quadsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "hamstrings" && activeButton === "1") {
			setExerciseOne(hamstringsExercises[exerciseSelectionOne]);
			setExerciseTwo(hamstringsExercises[exerciseSelectionTwo]);
			setExerciseThree(hamstringsExercises[exerciseSelectionThree]);
			setExerciseFour(hamstringsExercises[exerciseSelectionFour]);
			setExerciseFive(hamstringsExercises[exerciseSelectionFive]);
			setExerciseSix(hamstringsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "upper" && activeButton === "2") {
			setExerciseOne(pectoralsExercises[exerciseSelectionOne]);
			setExerciseTwo(backExercises[exerciseSelectionTwo]);
			setExerciseSix(trapsExercises[exerciseSelectionSix]);
			setExerciseThree(shouldersExercises[exerciseSelectionThree]);
			setExerciseFour(bicepsExercises[exerciseSelectionFour]);
			setExerciseFive(tricepsExercises[exerciseSelectionFive]);
		}
		if (e.target.value === "lower" && activeButton === "2") {
			setExerciseOne(quadsExercises[exerciseSelectionOne]);
			setExerciseTwo(hamstringsExercises[exerciseSelectionTwo]);
			setExerciseThree(calvesExercises[exerciseSelectionThree]);
			setExerciseFour(quadsExercises[exerciseSelectionFour]);
			setExerciseFive(calvesExercises[exerciseSelectionFive]);
			setExerciseSix(hamstringsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "push" && activeButton === "3") {
			setExerciseOne(pectoralsExercises[exerciseSelectionOne]);
			setExerciseTwo(pectoralsExercises[exerciseSelectionTwo]);
			setExerciseSix(shouldersExercises[exerciseSelectionSix]);
			setExerciseThree(shouldersExercises[exerciseSelectionThree]);
			setExerciseFour(tricepsExercises[exerciseSelectionFour]);
			setExerciseFive(tricepsExercises[exerciseSelectionFive]);
		}
		if (e.target.value === "pull" && activeButton === "3") {
			setExerciseOne(backExercises[exerciseSelectionOne]);
			setExerciseTwo(backExercises[exerciseSelectionTwo]);
			setExerciseThree(backExercises[exerciseSelectionThree]);
			setExerciseFour(trapsExercises[exerciseSelectionFour]);
			setExerciseFive(bicepsExercises[exerciseSelectionFive]);
			setExerciseSix(bicepsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "legs" && activeButton === "3") {
			setExerciseOne(quadsExercises[exerciseSelectionOne]);
			setExerciseTwo(hamstringsExercises[exerciseSelectionTwo]);
			setExerciseThree(calvesExercises[exerciseSelectionThree]);
			setExerciseFour(quadsExercises[exerciseSelectionFour]);
			setExerciseFive(calvesExercises[exerciseSelectionFive]);
			setExerciseSix(hamstringsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "chest" && activeButton === "4") {
			setExerciseOne(pectoralsExercises[exerciseSelectionOne]);
			setExerciseTwo(pectoralsExercises[exerciseSelectionTwo]);
			setExerciseSix(pectoralsExercises[exerciseSelectionSix]);
			setExerciseThree(pectoralsExercises[exerciseSelectionThree]);
			setExerciseFour(pectoralsExercises[exerciseSelectionFour]);
			setExerciseFive(pectoralsExercises[exerciseSelectionFive]);
		}
		if (e.target.value === "back" && activeButton === "4") {
			setExerciseOne(backExercises[exerciseSelectionOne]);
			setExerciseTwo(backExercises[exerciseSelectionTwo]);
			setExerciseThree(backExercises[exerciseSelectionThree]);
			setExerciseFour(backExercises[exerciseSelectionFour]);
			setExerciseFive(trapsExercises[exerciseSelectionFive]);
			setExerciseSix(trapsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "shoulders" && activeButton === "4") {
			setExerciseOne(shouldersExercises[exerciseSelectionOne]);
			setExerciseTwo(shouldersExercises[exerciseSelectionTwo]);
			setExerciseThree(shouldersExercises[exerciseSelectionThree]);
			setExerciseFour(shouldersExercises[exerciseSelectionFour]);
			setExerciseFive(shouldersExercises[exerciseSelectionFive]);
			setExerciseSix(shouldersExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "legs" && activeButton === "4") {
			setExerciseOne(quadsExercises[exerciseSelectionOne]);
			setExerciseTwo(quadsExercises[exerciseSelectionTwo]);
			setExerciseSix(hamstringsExercises[exerciseSelectionSix]);
			setExerciseThree(hamstringsExercises[exerciseSelectionThree]);
			setExerciseFour(calvesExercises[exerciseSelectionFour]);
			setExerciseFive(calvesExercises[exerciseSelectionFive]);
		}
		if (e.target.value === "arms" && activeButton === "4") {
			setExerciseOne(bicepsExercises[exerciseSelectionOne]);
			setExerciseTwo(bicepsExercises[exerciseSelectionTwo]);
			setExerciseThree(bicepsExercises[exerciseSelectionThree]);
			setExerciseFour(tricepsExercises[exerciseSelectionFour]);
			setExerciseFive(tricepsExercises[exerciseSelectionFive]);
			setExerciseSix(tricepsExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "abs" && activeButton === "4") {
			setExerciseOne(absExercises[exerciseSelectionOne]);
			setExerciseTwo(absExercises[exerciseSelectionTwo]);
			setExerciseThree(absExercises[exerciseSelectionThree]);
			setExerciseFour(absExercises[exerciseSelectionFour]);
			setExerciseFive(absExercises[exerciseSelectionFive]);
			setExerciseSix(absExercises[exerciseSelectionSix]);
		}
	};

	const HandleSubmit = (e) => {
		e.preventDefault();

		console.log(
			`workout-type:${activeButton} bodypart:${filterValue} goals:${activeButtonTwo}`
		);
		console.log(
			exerciseOne,
			exerciseTwo,
			exerciseThree,
			exerciseFour,
			exerciseFive,
			exerciseSix
		);
		setLoading(true);
		goToTop();
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		setTimeout(() => {
			setIsWorkoutModalOpen(true);
		}, 2000);
	};

	// Fetch exercises from Exercise DB API
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
		// fetch("https://exercisedb.p.rapidapi.com/exercises/target/pectorals", options)
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
		// // Fetch Shoulders Exercises
		// fetch("https://exercisedb.p.rapidapi.com/exercises/target/delts", options)
		// 	.then((response) => response.json())
		// 	.then((response) => setShouldersExercises(response))
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
		// fetch("https://exercisedb.p.rapidapi.com/exercises/target/triceps", options)
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
		generateExerciseNumbers();
		generateStrengthReps();
		generateGrowthReps();
		generateEnduranceReps();
	}, []);

	return (
		<section className='h-full mt-10 mb-20 flex flex-col space-y-10 items-center relative'>
			{loading && (
				<section className='absolute h-[130%] top-0 bottom-0 left-0 right-0 bg-[#f1f1f1] z-30'>
					<div className='flex justify-center mt-40'>
						<img src={loadingIcon} alt='' className='transition animate-bounce' />
					</div>
				</section>
			)}
			{isWorkoutModalOpen && (
				<WorkoutModal
					loading={loading}
					exerciseOne={exerciseOne}
					exerciseTwo={exerciseTwo}
					exerciseThree={exerciseThree}
					exerciseFour={exerciseFour}
					exerciseFive={exerciseFive}
					exerciseSix={exerciseSix}
					filterValue={filterValue}
					activeButtonTwo={activeButtonTwo}
					randomStrengthAndPowerNumberOne={randomStrengthAndPowerNumberOne}
					randomStrengthAndPowerNumberTwo={randomStrengthAndPowerNumberTwo}
					randomStrengthAndPowerNumberThree={randomStrengthAndPowerNumberThree}
					randomStrengthAndPowerNumberFour={randomStrengthAndPowerNumberFour}
					randomStrengthAndPowerNumberFive={randomStrengthAndPowerNumberFive}
					randomStrengthAndPowerNumberSix={randomStrengthAndPowerNumberSix}
					randomGrowthAndHypertrophyNumberOne={randomGrowthAndHypertrophyNumberOne}
					randomGrowthAndHypertrophyNumberTwo={randomGrowthAndHypertrophyNumberTwo}
					randomGrowthAndHypertrophyNumberThree={randomGrowthAndHypertrophyNumberThree}
					randomGrowthAndHypertrophyNumberFour={randomGrowthAndHypertrophyNumberFour}
					randomGrowthAndHypertrophyNumberFive={randomGrowthAndHypertrophyNumberFive}
					randomGrowthAndHypertrophyNumberSix={randomGrowthAndHypertrophyNumberOne}
					randomCardioAndEnduranceNumberOne={randomCardioAndEnduranceNumberOne}
					randomCardioAndEnduranceNumberTwo={randomCardioAndEnduranceNumberTwo}
					randomCardioAndEnduranceNumberThree={randomCardioAndEnduranceNumberThree}
					randomCardioAndEnduranceNumberFour={randomCardioAndEnduranceNumberFour}
					randomCardioAndEnduranceNumberFive={randomCardioAndEnduranceNumberOne}
					randomCardioAndEnduranceNumberSix={randomCardioAndEnduranceNumberOne}
				/>
			)}

			<div className='w-full flex items-center max-w-prose gap-3'>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
				<h2 className='uppercase text-center select-none text-slate-900 text-lg md:text-3xl'>
					Step 1. workout type
				</h2>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
			</div>
			<div className='flex w-full max-w-prose overflow-hidden'>
				<button
					id='1'
					onClick={HandleClick}
					className={
						activeButton === "1"
							? "options w-[25%] p-4 bg-white text-[.65rem] text-slate-900 uppercase rounded-tl-lg rounded-bl-lg transition hover:bg-opacity-80 md:text-base"
							: "options w-[25%] p-4 bg-slate-800 text-[.65rem] text-white uppercase rounded-tl-lg rounded-bl-lg transition hover:bg-opacity-80 md:text-base"
					}
				>
					Individual
				</button>
				<button
					id='2'
					onClick={HandleClick}
					className={
						activeButton === "2"
							? "options w-[25%] p-4 bg-white text-[.65rem] text-slate-900 uppercase transition hover:bg-opacity-80 md:text-base"
							: "options w-[25%] p-4 bg-slate-800 text-[.65rem] text-white uppercase transition hover:bg-opacity-80 md:text-base"
					}
				>
					Upper/Lower
				</button>
				<button
					id='3'
					onClick={HandleClick}
					className={
						activeButton === "3"
							? "options w-[25%] p-4 bg-white text-[.65rem] text-slate-900 uppercase transition hover:bg-opacity-80 md:text-base"
							: "options w-[25%] p-4 bg-slate-800 text-[.65rem] text-white uppercase transition hover:bg-opacity-80 md:text-base"
					}
				>
					Bro Split
				</button>
				<button
					id='4'
					onClick={HandleClick}
					className={
						activeButton === "4"
							? "options w-[25%] p-4 bg-white text-[.65rem] text-slate-900 uppercase rounded-tr-lg rounded-br-lg transition hover:bg-opacity-80 md:text-base"
							: "options w-[25%] p-4 bg-slate-800 text-[.65rem] text-white uppercase rounded-tr-lg rounded-br-lg transition hover:bg-opacity-80 md:text-base"
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
					{activeButton === 0 && (
						<select
							onChange={HandleChange}
							value={filterValue}
							className='w-[100%] bg-slate-800 text-white text-center uppercase p-4 transition hover:bg-opacity-80 cursor-pointer rounded-lg'
						>
							<option value='Select muscle group'>Please Select muscle group</option>
							<option className='p-4 bg-white text-slate-900' value='abs'>
								abs
							</option>
							<option className='p-4 bg-white text-slate-900' value='pectorals'>
								pectorals
							</option>
							<option className='p-4 bg-white text-slate-900' value='back'>
								back
							</option>
							<option className='p-4 bg-white text-slate-900' value='traps'>
								traps
							</option>
							<option className='p-4 bg-white text-slate-900' value='delts'>
								delts
							</option>
							<option className='p-4 bg-white text-slate-900' value='biceps'>
								biceps
							</option>
							<option className='p-4 bg-white text-slate-900' value='calves'>
								calves
							</option>
							<option className='p-4 bg-white text-slate-900' value='quads'>
								quads
							</option>
							<option className='p-4 bg-white text-slate-900' value='hamstrings'>
								hamstrings
							</option>
						</select>
					)}
					{activeButton === "1" && (
						<select
							onChange={HandleChange}
							value={filterValue}
							className='w-[100%] bg-slate-800 text-white text-center uppercase p-4 transition hover:bg-opacity-80 cursor-pointer rounded-lg'
						>
							<option value='Select muscle group'>Please Select muscle group</option>
							<option className='p-4 bg-white text-slate-900' value='abs'>
								abs
							</option>
							<option className='p-4 bg-white text-slate-900' value='pectorals'>
								pectorals
							</option>
							<option className='p-4 bg-white text-slate-900' value='back'>
								back
							</option>
							<option className='p-4 bg-white text-slate-900' value='traps'>
								traps
							</option>
							<option className='p-4 bg-white text-slate-900' value='delts'>
								delts
							</option>
							<option className='p-4 bg-white text-slate-900' value='biceps'>
								biceps
							</option>
							<option className='p-4 bg-white text-slate-900' value='calves'>
								calves
							</option>
							<option className='p-4 bg-white text-slate-900' value='quads'>
								quads
							</option>
							<option className='p-4 bg-white text-slate-900' value='hamstrings'>
								hamstrings
							</option>
						</select>
					)}
					{activeButton === "2" && (
						<select
							onChange={HandleChange}
							value={filterValue}
							className='w-[100%] bg-slate-800 text-white text-center uppercase p-4 transition hover:bg-opacity-80 cursor-pointer rounded-lg'
						>
							<option value='Select muscle group'>Please Select muscle group</option>
							<option className='p-4 bg-white text-slate-900' value='upper'>
								upper
							</option>
							<option className='p-4 bg-white text-slate-900' value='lower'>
								lower
							</option>
						</select>
					)}
					{activeButton === "3" && (
						<select
							onChange={HandleChange}
							value={filterValue}
							className='w-[100%] bg-slate-800 text-white text-center uppercase p-4 transition hover:bg-opacity-80 cursor-pointer rounded-lg'
						>
							<option value='Select muscle group'>Please Select muscle group</option>
							<option className='p-4 bg-white text-slate-900' value='push'>
								push
							</option>
							<option className='p-4 bg-white text-slate-900' value='pull'>
								pull
							</option>
							<option className='p-4 bg-white text-slate-900' value='legs'>
								legs
							</option>
						</select>
					)}
					{activeButton === "4" && (
						<select
							onChange={HandleChange}
							value={filterValue}
							className='w-[100%] bg-slate-800 text-white text-center uppercase p-4 transition hover:bg-opacity-80 cursor-pointer rounded-lg'
						>
							<option value='Select muscle group'>Please Select muscle group</option>
							<option className='p-4 bg-white text-slate-900' value='chest'>
								chest
							</option>
							<option className='p-4 bg-white text-slate-900' value='back'>
								back
							</option>
							<option className='p-4 bg-white text-slate-900' value='delts'>
								shoulders
							</option>
							<option className='p-4 bg-white text-slate-900' value='legs'>
								legs
							</option>
							<option className='p-4 bg-white text-slate-900' value='arms'>
								arms
							</option>
							<option className='p-4 bg-white text-slate-900' value='abs'>
								abs
							</option>
						</select>
					)}
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
				className='py-5 px-12 border-2 text-xl border-purple-500 bg-white text-purple-500 mx-auto rounded-lg transition uppercase hover:scale-105 hover:bg-purple-600 hover:text-white'
			>
				Generate Workout
			</button>
			<button
				className='py-5 px-12 border-2 text-xl border-purple-500 bg-white text-purple-500 mx-auto rounded-lg transition uppercase hover:scale-105 hover:bg-purple-600 z-50 hover:text-white'
				onClick={() => setIsWorkoutModalOpen(!isWorkoutModalOpen)}
			>
				open/close workout modal
			</button>
		</section>
	);
};

export default GenerateWorkout;
