import React, { useState, useEffect } from "react";

// Variables used in this example to display exercise data from props drilling
function WorkoutModal({
	exerciseOne,
	exerciseTwo,
	exerciseThree,
	exerciseFour,
	exerciseFive,
	exerciseSix,
	filterValue,
	activeButtonTwo,
	randomStrengthAndPowerNumberOne,
	randomStrengthAndPowerNumberTwo,
	randomStrengthAndPowerNumberThree,
	randomStrengthAndPowerNumberFour,
	randomStrengthAndPowerNumberFive,
	randomStrengthAndPowerNumberSix,
	randomGrowthAndHypertrophyNumberOne,
	randomGrowthAndHypertrophyNumberTwo,
	randomGrowthAndHypertrophyNumberThree,
	randomGrowthAndHypertrophyNumberFour,
	randomGrowthAndHypertrophyNumberFive,
	randomGrowthAndHypertrophyNumberSix,
	randomCardioAndEnduranceNumberOne,
	randomCardioAndEnduranceNumberTwo,
	randomCardioAndEnduranceNumberThree,
	randomCardioAndEnduranceNumberFour,
	randomCardioAndEnduranceNumberFive,
	randomCardioAndEnduranceNumberSix,
}) {
	const [goals, setGoals] = useState("strength and power");
	const [repsOne, setRepsOne] = useState();
	const [repsTwo, setRepsTwo] = useState();
	const [repsThree, setRepsThree] = useState();
	const [repsFour, setRepsFour] = useState();
	const [repsFive, setRepsFive] = useState();
	const [repsSix, setRepsSix] = useState();

	useEffect(() => {
		if (activeButtonTwo === "1") {
			setGoals("strength and power");
			setRepsOne(randomStrengthAndPowerNumberOne);
			setRepsTwo(randomStrengthAndPowerNumberTwo);
			setRepsThree(randomStrengthAndPowerNumberThree);
			setRepsFour(randomStrengthAndPowerNumberFour);
			setRepsFive(randomStrengthAndPowerNumberFive);
			setRepsSix(randomStrengthAndPowerNumberSix);
		}
		if (activeButtonTwo === "2") {
			setGoals("growth and hypertrophy");
			setRepsOne(randomGrowthAndHypertrophyNumberOne);
			setRepsTwo(randomGrowthAndHypertrophyNumberTwo);
			setRepsThree(randomGrowthAndHypertrophyNumberThree);
			setRepsFour(randomGrowthAndHypertrophyNumberFour);
			setRepsFive(randomGrowthAndHypertrophyNumberFive);
			setRepsSix(randomGrowthAndHypertrophyNumberSix);
		}
		if (activeButtonTwo === "3") {
			setGoals("cardiovascular and endurance");
			setGoals("growth and hypertrophy");
			setRepsOne(randomCardioAndEnduranceNumberOne);
			setRepsTwo(randomCardioAndEnduranceNumberTwo);
			setRepsThree(randomCardioAndEnduranceNumberThree);
			setRepsFour(randomCardioAndEnduranceNumberFour);
			setRepsFive(randomCardioAndEnduranceNumberFive);
			setRepsSix(randomCardioAndEnduranceNumberSix);
		}
	}, []);

	return (
		<section className='absolute h-[120%] top-0 bottom-0 left-0 right-0 bg-[#f1f1f1] z-30'>
			<div className='border-2 h-full mx-auto max-w-prose flex flex-col items-center bg-white space-y-3 uppercase  rounded-lg'>
				<h1 className=' text-sm text-slate-900 uppercase font-bold md:text-2xl py-3'>
					{goals} {filterValue} Workout
				</h1>
				<div className='w-full h-36 flex flex-col items-center text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
					<h1 className='pt-2'>1. Exercise Name Here</h1>
					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
						<reps>
							<p>reps</p>
							<p>{repsOne}</p>
						</reps>
						<tempo>
							<p>tempo</p>
							<p>1-0-1</p>
						</tempo>
						<rest>
							<p>rest</p>
							<p>120s</p>
						</rest>
					</div>
					<sets className='flex items-center w-full h-full px-3 md:px-10'>
						<p className='pr-2'>sets</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</sets>
				</div>
				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
					<h1 className='pt-2'>2. Exercise Name Here</h1>
					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
						<reps>
							<p>reps</p>
							<p>{repsTwo}</p>
						</reps>
						<tempo>
							<p>tempo</p>
							<p>1-0-1</p>
						</tempo>
						<rest>
							<p>rest</p>
							<p>120s</p>
						</rest>
					</div>
					<sets className='flex items-center w-full h-full px-3 md:px-10'>
						<p className='pr-2'>sets</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</sets>
				</div>
				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
					<h1 className='pt-2'>3. Exercise Name Here</h1>
					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
						<reps>
							<p>reps</p>
							<p>{repsThree}</p>
						</reps>
						<tempo>
							<p>tempo</p>
							<p>1-0-1</p>
						</tempo>
						<rest>
							<p>rest</p>
							<p>120s</p>
						</rest>
					</div>
					<sets className='flex items-center w-full h-full px-3 md:px-10'>
						<p className='pr-2'>sets</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</sets>
				</div>
				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
					<h1 className='pt-2'>4. Exercise Name Here</h1>
					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
						<reps>
							<p>reps</p>
							<p>{repsFour}</p>
						</reps>
						<tempo>
							<p>tempo</p>
							<p>1-0-1</p>
						</tempo>
						<rest>
							<p>rest</p>
							<p>120s</p>
						</rest>
					</div>
					<sets className='flex items-center w-full h-full px-3 md:px-10'>
						<p className='pr-2'>sets</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</sets>
				</div>
				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
					<h1 className='pt-2'>5. Exercise Name Here</h1>
					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
						<reps>
							<p>reps</p>
							<p>{repsFive}</p>
						</reps>
						<tempo>
							<p>tempo</p>
							<p>1-0-1</p>
						</tempo>
						<rest>
							<p>rest</p>
							<p>120s</p>
						</rest>
					</div>
					<sets className='flex items-center w-full h-full px-3 md:px-10'>
						<p className='pr-2'>sets</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</sets>
				</div>
				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
					<h1 className='pt-2'>6. Exercise Name Here</h1>
					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
						<reps>
							<p>reps</p>
							<p>{repsSix}</p>
						</reps>
						<tempo>
							<p>tempo</p>
							<p>1-0-1</p>
						</tempo>
						<rest>
							<p>rest</p>
							<p>120s</p>
						</rest>
					</div>
					<sets className='flex items-center w-full h-full px-3 md:px-10'>
						<p className='pr-2'>sets</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</sets>
				</div>
			</div>
		</section>
	);
}

// // Example not using variables to save API call amount during development
// function WorkoutModal() {
// 	return (
// 		<section className='absolute h-[120%] top-0 bottom-0 left-0 right-0 bg-[#f1f1f1] z-30'>
// 			<div className='border-2 h-full mx-auto max-w-prose flex flex-col items-center bg-white space-y-3 uppercase  rounded-lg'>
// 				<h1 className=' text-sm text-slate-900 uppercase font-bold md:text-2xl py-3'>
// 					Power and Strength Leg Workout
// 				</h1>
// 				<div className='w-full h-36 flex flex-col items-center text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>1. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>6</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>1-0-1</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>120s</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>2. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>6</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>1-0-1</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>120s</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>3. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>6</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>1-0-1</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>120s</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>4. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>6</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>1-0-1</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>120s</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>5. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>6</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>1-0-1</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>120s</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>6. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>6</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>1-0-1</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>120s</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

export default WorkoutModal;
