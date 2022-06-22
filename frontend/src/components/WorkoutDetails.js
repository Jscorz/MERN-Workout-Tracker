const WorkoutDetails = ({ workout }) => {
	return (
		<div className='flex flex-col  items-center space-y-1 bg-primary rounded-md my-10 mx-auto p-8 relative shadow-md md:items-start'>
			<h4 className=' text-xl text-white mb-3 font-bold'>
				{workout.title}
			</h4>
			<p className='text-md text-slate-800'>
				<strong>Weight (lbs): </strong>
				{workout.load}
			</p>
			<p className='text-md text-slate-800'>
				<strong>Reps: </strong>
				{workout.reps}
			</p>
			<p className='text-md text-slate-800'>{workout.createdAt}</p>
		</div>
	);
};

export default WorkoutDetails;
