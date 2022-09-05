import { useState } from "react";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(email, password);
	};

	return (
		<form
			className='max-w-[400px] mt-20 mx-auto p-5 py-10 bg-[#fff] text-primary rounded-lg flex flex-col space-y-6'
			onSubmit={handleSubmit}
		>
			<h3 className='font-extrabold tracking-wider text-2xl'>Sign up</h3>
			<label className='text-gray-600'>Email:</label>
			<input
				type='email'
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				className='border-black-700 border-2 p-2'
			/>
			<label className='text-gray-600'>Password:</label>
			<input
				type='password'
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				className='border-black-700 border-2 p-2'
			/>

			<button className='w-20 py-3 px-5 bg-primary text-white whitespace-nowrap flex justify-center rounded-lg'>
				<div>Sign up</div>
			</button>
		</form>
	);
};

export default Signup;
