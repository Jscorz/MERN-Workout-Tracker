import { useTotalWeightContext } from "../hooks/useTotalWeightContext";

const TotalWeightModal = ({ onRequestClose }) => {
	const { totalWeight } = useTotalWeightContext();
	return (
		<section className='w-full h-full z-50 absolute top-20 left-0 border-2 border-black'>
			<div className='-z-20 absolute left-0 inset-0 bg-white w-full h-full'></div>
			<div className='login-gradient'>
				<div className='bg-white h-[40rem] w-3/4 mx-auto mt-6 border-2 z-60 border-slate-500 rounded-lg'>
					<h1>
						You have lifted {totalWeight}lbs in the last 24 hours
					</h1>
					<button onClick={onRequestClose}>X</button>
				</div>
			</div>
		</section>
	);
};

export default TotalWeightModal;
