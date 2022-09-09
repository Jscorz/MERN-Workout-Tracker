import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../assets/Reps-Logger.svg";
import weightsLogo from "../assets/weights-icon.png";
import userImage1 from "../assets/user-picture-mario.jpg";
import userImage2 from "../assets/user-picture-minion.jpg";
import userImage3 from "../assets/user-picture-monster.jpg";
import userImage4 from "../assets/user-picture-eyeballs.jpg";

const Navbar = () => {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	const handleClick = () => {
		logout();
	};
	const [pictureNumber, setPictureNumber] = useState("");

	useEffect(() => {
		setPictureNumber(Math.trunc(Math.random() * 4 + 1));
	}, []);

	return (
		<header>
			<div className='flex items-center justify-between max-w-full bg-primary bg-opacity-90 px-2 py-8 mx-auto md:px-20'>
				<Link to='/'>
					<img
						src={weightsLogo}
						alt=''
						className='absolute left-5 top-4 -z-0 md:top-5 md:left-8'
					/>
					<img
						src={logo}
						alt=''
						className='ml-20 hover:opacity-80 duration-200 transition md:ml-4'
					/>
				</Link>
				<nav className='flex items-center'>
					{user && (
						<div className='flex items-center'>
							{pictureNumber === 1 && (
								<img
									src={userImage1}
									alt=''
									className='hidden rounded-full h-12 mr-2 border-2 md:block'
								/>
							)}
							{pictureNumber === 2 && (
								<img
									src={userImage2}
									alt=''
									className='hidden rounded-full h-12   mr-2 border-2 md:block'
								/>
							)}
							{pictureNumber === 3 && (
								<img
									src={userImage3}
									alt=''
									className='hidden rounded-full h-12   mr-2 border-2 md:block'
								/>
							)}
							{pictureNumber === 4 && (
								<img
									src={userImage4}
									alt=''
									className='hidden rounded-full h-12   mr-2 border-2 md:block'
								/>
							)}

							<span className='hidden text-white text-sm mr-4 md:block'>
								{user.email}
							</span>
							<button
								className='text-white font-bold px-3 py-1 border-2 border-white rounded-lg md:-mr-8  '
								onClick={handleClick}
							>
								Log out
							</button>
						</div>
					)}
					{!user && (
						<div>
							<Link
								to='/login'
								className='text-white mr-12 text-2xl font-bold'
							>
								Login
							</Link>
							<Link
								to='/signup'
								className='text-white text-2xl font-bold'
							>
								Signup
							</Link>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
