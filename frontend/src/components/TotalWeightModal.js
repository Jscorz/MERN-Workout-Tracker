import { useState, useEffect } from "react";
import { useTotalWeightContext } from "../hooks/useTotalWeightContext";
import weightsImage from "../assets/weights-login.jpg";
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
		console.log(randomNumber);
	}, []);

	return (
		<section className='w-full h-full z-50 absolute top-20 left-0 border-2 border-black'>
			<div className='-z-20 absolute left-0 inset-0 bg-white w-full h-full'></div>
			<div className='login-gradient'>
				<div className='bg-white   mx-3 mt-6 border-2 z-60 border-slate-500 rounded-lg flex  flex-col md:mx-auto md:flex-row md:w-[700px] md:h-[40rem]'>
					<div className='w-full order-2 md:order-1'>
						<h1 className='text-slate-800 font-bold text-3xl text-center p-3'>
							You have lifted {totalWeight}lbs in the last 24
							hours
						</h1>
						{randomNumber === 1 && (
							<h2 className='text-slate-800  text-3xl text-center p-3'>
								That is the same as {tigerWeight} Tigers
							</h2>
						)}
						{randomNumber === 2 && (
							<h2 className='text-slate-800  text-3xl text-center p-3'>
								That is the same as {crocodileWeight} Crocodiles
							</h2>
						)}
						{randomNumber === 3 && (
							<h2 className='text-slate-800  text-3xl text-center p-3'>
								That is the same as {motorcyleWeight}{" "}
								Motorcycyles
							</h2>
						)}
						{randomNumber === 4 && (
							<h2 className='text-slate-800  text-3xl text-center p-3'>
								That is the same as {elephantWeight} Elephants
							</h2>
						)}
					</div>
					<div className='relative md:w-[700px] order-1 md:order-2'>
						<img
							src={weightsImage}
							alt=''
							className='h-96 min-w-full md:min-h-full'
						/>
						<button
							onClick={onRequestClose}
							className='text-center absolute top-5 right-5 text-xl w-8 h-8 bg-white bg-opacity-20 text-red-600 border-2 border-red-600  lg:w-11 lg:h-11 lg:text-2xl rounded-full'
						>
							X
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TotalWeightModal;
