import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signup, error, isLoading } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(email, password);
	};

	return (
		<form
			className='gradient max-w-[400px] mt-20 mx-auto p-5 py-10 bg-[#fff]  border-2 border-primary rounded-lg flex flex-col space-y-6'
			onSubmit={handleSubmit}
		>
			<h3 className='font-extrabold tracking-wider text-2xl text-slate-700'>
				Sign up
			</h3>
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

			<button
				disabled={isLoading}
				className='w-20 py-3 px-5 border bg-primary text-white whitespace-nowrap flex justify-center rounded-lg'
			>
				<div>Sign up</div>
			</button>
			{error && (
				<div className='w-full p-5 border border-red-600  bg-primary/50 text-red-600 rounded-lg'>
					{error}
				</div>
			)}
		</form>
	);
};

export default Signup;
