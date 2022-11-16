import React, { useState, useEffect } from "react";
import StretchModal from "../components/StretchModal";
import loadingIcon from "../assets/weights-icon-loader.png";

const GenerateStretch = () => {
	const API_KEY = process.env.REACT_APP_API_KEY;

	// State values for exercises by body parts
	const [allExercises, setAllExercises] = useState();
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
	const [search, setSearch] = useState();

	// State value for Modal containing custom stretches
	const [isStretchModalOpen, setIsStretchModalOpen] = useState(false);

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

	// State values for six exercises for custom workout for biceps, triceps, and calves
	const [exerciseShorterSelectionOne, setExerciseShorterSelectionOne] = useState(
		Math.trunc(Math.random() * 43 + 1)
	);
	const [exerciseShorterSelectionTwo, setExerciseShorterSelectionTwo] = useState(
		Math.trunc(Math.random() * 43 + 1)
	);
	const [exerciseShorterSelectionThree, setExerciseShorterSelectionThree] = useState(
		Math.trunc(Math.random() * 43 + 1)
	);
	const [exerciseShorterSelectionFour, setExerciseShorterSelectionFour] = useState(
		Math.trunc(Math.random() * 43 + 1)
	);
	const [exerciseShorterSelectionFive, setExerciseShorterSelectionFive] = useState(
		Math.trunc(Math.random() * 43 + 1)
	);
	const [exerciseShorterSelectionSix, setExerciseShorterSelectionSix] = useState(
		Math.trunc(Math.random() * 43 + 1)
	);

	// State values for six exercises for custom workout for traps
	const [exerciseShortestSelectionOne, setExerciseShortestSelectionOne] = useState(
		Math.trunc(Math.random() * 11 + 1)
	);
	const [exerciseShortestSelectionTwo, setExerciseShortestSelectionTwo] = useState(
		Math.trunc(Math.random() * 11 + 1)
	);
	const [exerciseShortestSelectionThree, setExerciseShortestSelectionThree] = useState(
		Math.trunc(Math.random() * 11 + 1)
	);
	const [exerciseShortestSelectionFour, setExerciseShortestSelectionFour] = useState(
		Math.trunc(Math.random() * 11 + 1)
	);
	const [exerciseShortestSelectionFive, setExerciseShortestSelectionFive] = useState(
		Math.trunc(Math.random() * 11 + 1)
	);
	const [exerciseShortestSelectionSix, setExerciseShortestSelectionSix] = useState(
		Math.trunc(Math.random() * 11 + 1)
	);

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
			setExerciseThree(trapsExercises[exerciseShortestSelectionThree]);
			setExerciseFour(trapsExercises[exerciseShortestSelectionFour]);
			setExerciseFive(backExercises[exerciseSelectionFive]);
			setExerciseSix(backExercises[exerciseSelectionSix]);
		}
		if (e.target.value === "traps" && activeButton === "1") {
			setExerciseOne(trapsExercises[exerciseShortestSelectionOne]);
			setExerciseTwo(trapsExercises[exerciseShortestSelectionTwo]);
			setExerciseThree(trapsExercises[exerciseShortestSelectionThree]);
			setExerciseFour(trapsExercises[exerciseShortestSelectionFour]);
			setExerciseFive(trapsExercises[exerciseShortestSelectionFive]);
			setExerciseSix(trapsExercises[exerciseShortestSelectionSix]);
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
			setExerciseOne(bicepsExercises[exerciseShorterSelectionOne]);
			setExerciseTwo(bicepsExercises[exerciseShorterSelectionTwo]);
			setExerciseThree(bicepsExercises[exerciseShorterSelectionThree]);
			setExerciseFour(bicepsExercises[exerciseShorterSelectionFour]);
			setExerciseFive(bicepsExercises[exerciseShorterSelectionFive]);
			setExerciseSix(bicepsExercises[exerciseShorterSelectionSix]);
		}
		if (e.target.value === "triceps" && activeButton === "1") {
			setExerciseOne(tricepsExercises[exerciseShorterSelectionOne]);
			setExerciseTwo(tricepsExercises[exerciseShorterSelectionTwo]);
			setExerciseThree(tricepsExercises[exerciseShorterSelectionThree]);
			setExerciseFour(tricepsExercises[exerciseShorterSelectionFour]);
			setExerciseFive(tricepsExercises[exerciseShorterSelectionFive]);
			setExerciseSix(tricepsExercises[exerciseShorterSelectionSix]);
		}
		if (e.target.value === "calves" && activeButton === "1") {
			setExerciseOne(calvesExercises[exerciseShorterSelectionOne]);
			setExerciseTwo(calvesExercises[exerciseShorterSelectionTwo]);
			setExerciseThree(calvesExercises[exerciseShorterSelectionThree]);
			setExerciseFour(calvesExercises[exerciseShorterSelectionFour]);
			setExerciseFive(calvesExercises[exerciseShorterSelectionFive]);
			setExerciseSix(calvesExercises[exerciseShorterSelectionSix]);
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
	};

	const HandleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		goToTop();

		setTimeout(() => {
			setLoading(false);
		}, 2000);

		setTimeout(() => {
			setIsStretchModalOpen(true);
		}, 2000);
	};

	const handleSearch = () => {
		if (search) {
			const searchedExercises = allExercises.filter(
				(exercise) =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search)
			);
			setSearch("");
			setAllExercises(searchedExercises);
		}
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
		// Fetch all exercises, then filtered by body part
		fetch("https://exercisedb.p.rapidapi.com/exercises", options)
			.then((response) => response.json())
			.then((response) => {
				setAllExercises(
					response.filter((exercise) => exercise.name.toLowerCase().includes("stretch"))
				);
				setAbsExercises(
					response.filter((exercise) => exercise.bodyPart.toLowerCase().includes("waist"))
				);
				setPectoralsExercises(
					response.filter((exercise) => exercise.bodyPart.toLowerCase().includes("chest"))
				);
				setBackExercises(
					response.filter((exercise) => exercise.bodyPart.toLowerCase().includes("back"))
				);
				setTrapsExercises(
					response.filter((exercise) => exercise.name.toLowerCase().includes("shrug"))
				);
				setShouldersExercises(
					response.filter((exercise) =>
						exercise.bodyPart.toLowerCase().includes("shoulders")
					)
				);
				setBicepsExercises(
					response.filter((exercise) => exercise.name.toLowerCase().includes("bicep"))
				);
				setTricepsExercises(
					response.filter((exercise) => exercise.name.toLowerCase().includes("tricep"))
				);
				setCalvesExercises(
					response.filter((exercise) =>
						exercise.bodyPart.toLowerCase().includes("lower legs")
					)
				);
				setQuadsExercises(
					response.filter((exercise) =>
						exercise.bodyPart.toLowerCase().includes("upper legs")
					)
				);
				setHamstringsExercises(
					response.filter((exercise) =>
						exercise.bodyPart.toLowerCase().includes("upper legs")
					)
				);
				console.log(
					response.filter((exercise) => exercise.name.toLowerCase().includes("stretch")),
					absExercises,
					pectoralsExercises,
					backExercises,
					trapsExercises,
					shouldersExercises,
					bicepsExercises,
					tricepsExercises,
					quadsExercises,
					hamstringsExercises,
					calvesExercises
				);
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		generateExerciseNumbers();
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
			{isStretchModalOpen && (
				<StretchModal
					goToTop={goToTop}
					setIsStretchModalOpen={setIsStretchModalOpen}
					setActiveButton={setActiveButton}
					setActiveButtonTwo={setActiveButtonTwo}
					exerciseOne={exerciseOne}
					exerciseTwo={exerciseTwo}
					exerciseThree={exerciseThree}
					exerciseFour={exerciseFour}
					exerciseFive={exerciseFive}
					exerciseSix={exerciseSix}
					filterValue={filterValue}
					activeButtonTwo={activeButtonTwo}
				/>
			)}

			<div className='w-full flex items-center max-w-prose gap-3'>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
				<h2 className='uppercase text-center select-none text-slate-900 text-lg md:text-3xl'>
					Generalized
				</h2>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
			</div>
			<div className='flex w-full max-w-prose overflow-hidden'>
				<button
					id='1'
					onClick={HandleClick}
					className={
						activeButton === "1"
							? "options w-[33%] p-4 bg-white text-[.65rem] text-slate-900 uppercase rounded-tl-lg rounded-bl-lg transition hover:bg-opacity-80 md:text-base"
							: "options w-[33%] p-4 bg-slate-800 text-[.65rem] text-white uppercase rounded-tl-lg rounded-bl-lg transition hover:bg-opacity-80 md:text-base"
					}
				>
					Chest <br />
					Shoulders <br />
					Triceps <br />
				</button>
				<button
					id='2'
					onClick={HandleClick}
					className={
						activeButton === "2"
							? "options w-[33%] p-4 bg-white text-[.65rem] text-slate-900 uppercase transition hover:bg-opacity-80 md:text-base"
							: "options w-[33%] p-4 bg-slate-800 text-[.65rem] text-white uppercase transition hover:bg-opacity-80 md:text-base"
					}
				>
					Back <br />
					Biceps <br />
					Shoulders <br />
				</button>
				<button
					id='3'
					onClick={HandleClick}
					className={
						activeButton === "3"
							? "options w-[33%] p-4 bg-white text-[.65rem] text-slate-900 uppercase transition rounded-tr-lg rounded-br-lg hover:bg-opacity-80 md:text-base"
							: "options w-[33%] p-4 bg-slate-800 text-[.65rem] text-white uppercase transition rounded-tr-lg rounded-br-lg hover:bg-opacity-80 md:text-base"
					}
				>
					Quads <br />
					Hamstrings <br />
					Glutes <br />
					Calves <br />
				</button>
			</div>
			<div className='w-full flex items-center max-w-prose gap-3'>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
				<h2 className='uppercase text-center select-none text-slate-900 text-lg md:text-3xl'>
					Custom Selection
				</h2>
				<span className='h-0.5 flex-1 bg-slate-900'></span>
			</div>
			<div className='flex w-full max-w-prose'>
				<form className='w-full'>
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
				</form>
			</div>

			<button
				onClick={HandleSubmit}
				className='py-5 px-12 border-2 text-xl border-purple-500 bg-white text-purple-500 mx-auto rounded-lg transition uppercase hover:scale-105 hover:bg-purple-600 hover:text-white'
			>
				Generate Stretches
			</button>
		</section>
	);
};

export default GenerateStretch;
