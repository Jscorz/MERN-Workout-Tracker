import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import weightsImage from "../assets/weights-signin.jpg";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signup, error, isLoading } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(email, password, 1);
	};

	return (
		<section className='w-full '>
			<div className='flex justify-center align-center h-[38rem] md:w-[1000px] mx-auto login-gradient'>
				<form
					className='gradient flex-1 max-w-[400px] mt-20 p-5 py-10 bg-[#fff]  border-2 border-purple-500 rounded-lg flex flex-col space-y-6 lg:w-[1500px]'
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
						className='w-32 py-3 px-5 border bg-primary text-white whitespace-nowrap flex justify-center rounded-lg'
					>
						<div>Sign up</div>
					</button>
					{error && (
						<div className='w-full p-5 border border-red-600  bg-primary/50 text-red-600 rounded-lg'>
							{error}
						</div>
					)}
				</form>
				<div className='hidden w-[500px] mt-20 rounded-lg overflow-hidden border-t-2 border-r-2 border-b-2 border-purple-500 md:block'>
					<img src={weightsImage} alt='' className='max-h-full min-w-full relative' />
					<span className='absolute bg-slate-800/50 top-52 right-32 text-5xl text-white font-bold z-20 p-2 shadow-lg rounded-lg leading-relaxed'>
						Sign Up <br></br> and Start <br></br>Working Out!
					</span>
				</div>
			</div>
		</section>
	);
};

export default Signup;
