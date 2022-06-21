const WorkoutDetails = ({ workout }) => {
	return (
		<div className='flex flex-col  items-center space-y-3 bg-slate-500 rounded-md my-10 mx-auto p-8 relative shadow-md'>
			<h4 className=' text-lg text-cyan-400'>{workout.title}</h4>
			<p className='text-md text-slate-800'>
				<strong>Load (kg): </strong>
				{workout.load}
			</p>
			<p className='text-md text-slate-800'>
				<strong>Reps (kg): </strong>
				{workout.reps}
			</p>
			<p className='text-md text-slate-800'>{workout.createdAt}</p>
		</div>
	);
};

export default WorkoutDetails;
