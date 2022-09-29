import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import UserPictureModal from "../components/UserPictureModal";
import logo from "../assets/logo-no-background.png";
import userImage1 from "../assets/user-picture-mario.jpg";
import userImage2 from "../assets/user-picture-minion.jpg";
import userImage3 from "../assets/user-picture-monster.jpg";
import userImage4 from "../assets/user-picture-eyeballs.jpg";

const Navbar = () => {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	const [isUserPictureModelOpen, setIsUserPictureModelOpen] = useState(false);

	const handleClick = () => {
		logout();
	};

	const handlePictureClick = () => {
		setIsUserPictureModelOpen(!isUserPictureModelOpen);
	};

	return (
		<header>
			<div className=' flex items-center justify-between max-w-full bg-slate-900 bg-opacity-90 px-2 py-2 mx-auto md:px-20'>
				<Link to='/'>
					<img
						src={logo}
						alt=''
						className='ml-5 mb-2 hover:opacity-80 duration-200 transition  md:w-full md:ml-4'
					/>
				</Link>
				<nav className='flex items-center'>
					{user && (
						<div className='flex items-center '>
							<Link
								to='/generateworkout'
								className='hidden text-white uppercase mr-16 md:block'
							>
								Generate Workout
							</Link>
							{user.user.userpicture === "1" && (
								<img
									src={userImage1}
									alt=''
									className='hidden rounded-full h-12 mr-2 border-2 transition hover:opacity-50 cursor-pointer md:block relative'
									onClick={handlePictureClick}
								/>
							)}
							{user.user.userpicture === "2" && (
								<img
									src={userImage2}
									alt=''
									className='hidden rounded-full h-12   mr-2 border-2 transition hover:opacity-50 cursor-pointer md:block'
									onClick={handlePictureClick}
								/>
							)}
							{user.user.userpicture === "3" && (
								<img
									src={userImage3}
									alt=''
									className='hidden rounded-full h-12   mr-2 border-2 transition hover:opacity-50 cursor-pointer md:block'
									onClick={handlePictureClick}
								/>
							)}
							{user.user.userpicture === "4" && (
								<img
									src={userImage4}
									alt=''
									className='hidden rounded-full h-12   mr-2 border-2 transition hover:opacity-50 cursor-pointer md:block'
									onClick={handlePictureClick}
								/>
							)}

							{isUserPictureModelOpen && (
								<UserPictureModal
									onRequestClose={() =>
										setIsUserPictureModelOpen(false)
									}
								/>
							)}

							<span className='hidden text-white text-xs mr-4 md:block'>
								{user.user.email}
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
						<div className='flex flex-col md:flex-row '>
							<Link
								to='/login'
								className='text-xl text-white mr-12 md:text-2xl font-bold'
							>
								Login
							</Link>
							<Link
								to='/signup'
								className='text-xl text-white md:text-2xl font-bold'
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
