import { useState, useEffect } from "react";
import { useTotalWeightContext } from "../hooks/useTotalWeightContext";
import weightsImage from "../assets/weights-login.jpg";
import kettlebellsImage from "../assets/kettlebells.jpg";
import crocodileImage from "../assets/crocodile.png";
import elephantImage from "../assets/elephant.png";
import motorcycleImage from "../assets/motorcycle.png";
import tigerImage from "../assets/tiger.png";
import useCalculateTigerWeight from "../hooks/useCalculateTigerWeight";
import useCalculateCrocodileWeight from "../hooks/useCalculateCrocodileWeight";
import useCalculateMotorcycleWeight from "../hooks/useCalculateMotorcycleWeight";
import useCalculateElephantWeight from "../hooks/useCalculateElephantWeight";

const TotalWeightModal = ({ onRequestClose }) => {
	const { totalWeight } = useTotalWeightContext();
	const crocodileWeight = useCalculateCrocodileWeight(totalWeight);
	const elephantWeight = useCalculateElephantWeight(totalWeight);
	const motorcyleWeight = useCalculateMotorcycleWeight(totalWeight);
	const tigerWeight = useCalculateTigerWeight(totalWeight);

	const [randomNumber, setRandomNumber] = useState("");

	useEffect(() => {
		setRandomNumber(Math.trunc(Math.random() * 4 + 1));
	}, []);

	return (
		<section
			id='top'
			className='w-full h-[120%] z-30 absolute top-20 left-0 border-2 border-b-slate-900 md:h-[200%]'
		>
			<div className='-z-20 absolute left-0 inset-0 bg-white w-full h-full'></div>
			<div className='total-weight-gradient relative'>
				<div className='bg-white mx-3 mt-10 border-2 z-60 border-purple-500 rounded-lg flex flex-col md:mx-auto md:flex-row md:w-[700px] md:h-[30rem] md:mt-20'>
					<div className='w-full order-2 md:order-1'>
						<h1 className='text-slate-800 font-bold text-3xl text-center p-3'>
							You have lifted {totalWeight}lbs in the last 24 hours
						</h1>
						{randomNumber === 1 && (
							<div>
								<h2 className='text-slate-800  text-3xl text-center p-3'>
									That is the same as {tigerWeight} Tigers
								</h2>
								<img src={tigerImage} alt='' />
							</div>
						)}
						{randomNumber === 2 && (
							<div>
								<h2 className='text-slate-800  text-3xl text-center p-3'>
									That is the same as {crocodileWeight} Crocodiles
								</h2>
								<img src={crocodileImage} alt='' />
							</div>
						)}
						{randomNumber === 3 && (
							<div>
								<h2 className='text-slate-800  text-3xl text-center p-3'>
									That is the same as {motorcyleWeight} Motorcycyles
								</h2>
								<img src={motorcycleImage} alt='' />
							</div>
						)}
						{randomNumber === 4 && (
							<div>
								<h2 className='text-slate-800  text-3xl text-center p-3'>
									That is the same as {elephantWeight} Elephants
								</h2>
								<img src={elephantImage} alt='' />
							</div>
						)}
					</div>
					<div className='relative md:w-[700px] order-1 md:order-2'>
						<img
							src={kettlebellsImage}
							alt=''
							className='h-48 min-w-full rounded-t-lg border-l-2 border-b-purple-500 md:rounded-tr-lg md:rounded-tl-none md:min-h-full  md:rounded-br-lg md:border-l-purple-500'
						/>
						<button
							onClick={onRequestClose}
							className='text-center absolute top-5 right-5 text-xl w-8 h-8 bg-white bg-opacity-20 text-red-600 border-2 border-red-600  lg:w-11 lg:h-11 lg:text-2xl rounded-full transition hover:scale-110'
						>
							X
						</button>
					</div>
				</div>
			</div>
			<a href='#top' className='flex flex-col items-center my-8 space-y-4'>
				<button
					onClick={onRequestClose}
					className='py-3 px-12 border-2 border-purple-500 bg-white text-purple-500 shadow-lg rounded-lg transition hover:scale-105 hover:bg-purple-600 hover:text-white'
				>
					back to track workout
				</button>
			</a>
		</section>
	);
};

export default TotalWeightModal;
