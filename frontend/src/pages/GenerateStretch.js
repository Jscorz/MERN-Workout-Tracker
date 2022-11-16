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

	const HandleClick = (e) => {
		e.preventDefault();
		let activeButtonNumber = e.target.id;

		setActiveButton(activeButtonNumber);
		if (activeButtonNumber === "1") {
			setFilterValue("");
			setExerciseOne(
				pectoralsExercises[Math.trunc(Math.random() * 5)] || pectoralsExercises[1]
			);
			setExerciseTwo(
				pectoralsExercises[Math.trunc(Math.random() * 5)] || pectoralsExercises[2]
			);
			setExerciseThree(
				tricepsExercises[Math.trunc(Math.random() * 4)] || tricepsExercises[1]
			);
			setExerciseFour(tricepsExercises[Math.trunc(Math.random() * 4)] || tricepsExercises[2]);
			setExerciseFive(
				pectoralsExercises[Math.trunc(Math.random() * 5)] || pectoralsExercises[5]
			);
			setExerciseSix(tricepsExercises[Math.trunc(Math.random() * 4)] || tricepsExercises[3]);
		}
		if (activeButtonNumber === "2") {
			setFilterValue("");
			setExerciseOne(backExercises[Math.trunc(Math.random() * 13)] || backExercises[1]);
			setExerciseTwo(backExercises[Math.trunc(Math.random() * 13)] || backExercises[2]);
			setExerciseThree(backExercises[Math.trunc(Math.random() * 13)] || backExercises[3]);
			setExerciseFour(
				shouldersExercises[Math.trunc(Math.random() * 1)] || shouldersExercises[0]
			);
			setExerciseFive(backExercises[Math.trunc(Math.random() * 13)] || backExercises[4]);
			setExerciseSix(backExercises[Math.trunc(Math.random() * 13)] || backExercises[5]);
		}
		if (activeButtonNumber === "3") {
			setFilterValue("");
			setExerciseOne(quadsExercises[Math.trunc(Math.random() * 24)] || quadsExercises[1]);
			setExerciseTwo(
				hamstringsExercises[Math.trunc(Math.random() * 24)] || hamstringsExercises[1]
			);
			setExerciseThree(calvesExercises[Math.trunc(Math.random() * 10)] || calvesExercises[1]);
			setExerciseFour(quadsExercises[Math.trunc(Math.random() * 24)] || quadsExercises[2]);
			setExerciseFive(
				hamstringsExercises[Math.trunc(Math.random() * 24)] || hamstringsExercises[2]
			);
			setExerciseSix(calvesExercises[Math.trunc(Math.random() * 10)] || calvesExercises[2]);
		}
	};

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const HandleChange = (e) => {
		setFilterValue(e.target.value);
		if (e.target.value === "pectorals") {
			setActiveButton(0);
			setExerciseOne(
				pectoralsExercises[Math.trunc(Math.random() * 4 + 1)] || pectoralsExercises[1]
			);
			setExerciseTwo(
				pectoralsExercises[Math.trunc(Math.random() * 4 + 1)] || pectoralsExercises[2]
			);
			setExerciseThree(
				pectoralsExercises[Math.trunc(Math.random() * 4 + 1)] || pectoralsExercises[3]
			);
			setExerciseFour(
				pectoralsExercises[Math.trunc(Math.random() * 4 + 1)] || pectoralsExercises[4]
			);
			setExerciseFive(
				pectoralsExercises[Math.trunc(Math.random() * 4 + 1)] || pectoralsExercises[5]
			);
			setExerciseSix(
				pectoralsExercises[Math.trunc(Math.random() * 4 + 1)] || pectoralsExercises[6]
			);
		}
		if (e.target.value === "back") {
			setActiveButton(0);
			setExerciseOne(backExercises[Math.trunc(Math.random() * 12 + 1)] || backExercises[1]);
			setExerciseTwo(backExercises[Math.trunc(Math.random() * 12 + 1)] || backExercises[2]);
			setExerciseThree(backExercises[Math.trunc(Math.random() * 12 + 1)] || backExercises[3]);
			setExerciseFour(backExercises[Math.trunc(Math.random() * 12 + 1)] || backExercises[4]);
			setExerciseFive(backExercises[Math.trunc(Math.random() * 12 + 1)] || backExercises[5]);
			setExerciseSix(backExercises[Math.trunc(Math.random() * 12 + 1)] || backExercises[6]);
		}
		if (e.target.value === "triceps") {
			setActiveButton(0);
			setExerciseOne(
				tricepsExercises[Math.trunc(Math.random() * 3 + 1)] || tricepsExercises[1]
			);
			setExerciseTwo(
				tricepsExercises[Math.trunc(Math.random() * 3 + 1)] || tricepsExercises[2]
			);
			setExerciseThree(
				tricepsExercises[Math.trunc(Math.random() * 3 + 1)] || tricepsExercises[3]
			);
			setExerciseFour(
				tricepsExercises[Math.trunc(Math.random() * 3 + 1)] || tricepsExercises[4]
			);
			setExerciseFive(
				tricepsExercises[Math.trunc(Math.random() * 3 + 1)] || tricepsExercises[1]
			);
			setExerciseSix(
				tricepsExercises[Math.trunc(Math.random() * 3 + 1)] || tricepsExercises[2]
			);
		}
		if (e.target.value === "calves") {
			setActiveButton(0);
			setExerciseOne(calvesExercises[Math.trunc(Math.random() * 10)] || calvesExercises[1]);
			setExerciseTwo(calvesExercises[Math.trunc(Math.random() * 10)] || calvesExercises[2]);
			setExerciseThree(calvesExercises[Math.trunc(Math.random() * 10)] || calvesExercises[3]);
			setExerciseFour(calvesExercises[Math.trunc(Math.random() * 10)] || calvesExercises[4]);
			setExerciseFive(calvesExercises[Math.trunc(Math.random() * 10)] || calvesExercises[5]);
			setExerciseSix(calvesExercises[Math.trunc(Math.random() * 10)] || calvesExercises[6]);
		}
		if (e.target.value === "quads") {
			setActiveButton(0);
			setExerciseOne(quadsExercises[Math.trunc(Math.random() * 24)] || quadsExercises[1]);
			setExerciseTwo(quadsExercises[Math.trunc(Math.random() * 24)] || quadsExercises[2]);
			setExerciseThree(quadsExercises[Math.trunc(Math.random() * 24)] || quadsExercises[3]);
			setExerciseFour(quadsExercises[Math.trunc(Math.random() * 24)] || quadsExercises[4]);
			setExerciseFive(quadsExercises[Math.trunc(Math.random() * 24)] || quadsExercises[5]);
			setExerciseSix(quadsExercises[Math.trunc(Math.random() * 24)] || quadsExercises[6]);
		}
		if (e.target.value === "hamstrings") {
			setActiveButton(0);
			setExerciseOne(
				hamstringsExercises[Math.trunc(Math.random() * 24)] || hamstringsExercises[1]
			);
			setExerciseTwo(
				hamstringsExercises[Math.trunc(Math.random() * 24)] || hamstringsExercises[2]
			);
			setExerciseThree(
				hamstringsExercises[Math.trunc(Math.random() * 24)] || hamstringsExercises[3]
			);
			setExerciseFour(
				hamstringsExercises[Math.trunc(Math.random() * 24)] || hamstringsExercises[4]
			);
			setExerciseFive(
				hamstringsExercises[Math.trunc(Math.random() * 24)] || hamstringsExercises[5]
			);
			setExerciseSix(
				hamstringsExercises[Math.trunc(Math.random() * 24)] || hamstringsExercises[6]
			);
		}
	};

	const HandleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		goToTop();

		setTimeout(() => {
			setLoading(false);
		}, 2000);

		console.log(
			exerciseOne,
			exerciseTwo,
			exerciseThree,
			exerciseFour,
			exerciseFive,
			exerciseSix
		);

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
					response.filter(
						(exercise) =>
							exercise.bodyPart.toLowerCase().includes("waist") &&
							exercise.name.toLowerCase().includes("stretch")
					)
				);
				setPectoralsExercises(
					response.filter(
						(exercise) =>
							exercise.bodyPart.toLowerCase().includes("chest") &&
							exercise.name.toLowerCase().includes("stretch")
					)
				);
				setBackExercises(
					response.filter(
						(exercise) =>
							exercise.bodyPart.toLowerCase().includes("back") &&
							exercise.name.toLowerCase().includes("stretch")
					)
				);
				setShouldersExercises(
					response.filter(
						(exercise) =>
							exercise.bodyPart.toLowerCase().includes("shoulders") &&
							exercise.name.toLowerCase().includes("stretch")
					)
				);
				setTricepsExercises(
					response.filter(
						(exercise) =>
							exercise.name.toLowerCase().includes("tricep") &&
							exercise.name.toLowerCase().includes("stretch")
					)
				);
				setCalvesExercises(
					response.filter(
						(exercise) =>
							exercise.bodyPart.toLowerCase().includes("lower legs") &&
							exercise.name.toLowerCase().includes("stretch")
					)
				);
				setQuadsExercises(
					response.filter(
						(exercise) =>
							exercise.bodyPart.toLowerCase().includes("upper legs") &&
							exercise.name.toLowerCase().includes("stretch")
					)
				);
				setHamstringsExercises(
					response.filter(
						(exercise) =>
							exercise.bodyPart.toLowerCase().includes("upper legs") &&
							exercise.name.toLowerCase().includes("stretch")
					)
				);
				console.log(
					response.filter((exercise) => exercise.name.toLowerCase().includes("stretch")),
					absExercises,
					pectoralsExercises,
					backExercises,
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
					activeButton={activeButton}
					setActiveButton={setActiveButton}
					exerciseOne={exerciseOne}
					exerciseTwo={exerciseTwo}
					exerciseThree={exerciseThree}
					exerciseFour={exerciseFour}
					exerciseFive={exerciseFive}
					exerciseSix={exerciseSix}
					filterValue={filterValue}
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
						<option className='p-4 bg-white text-slate-900' value='pectorals'>
							pectorals
						</option>
						<option className='p-4 bg-white text-slate-900' value='back'>
							back
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
