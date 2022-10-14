import React from "react";
import { Link } from "react-router-dom";
import userImage1 from "../assets/user-picture-mario.jpg";
import userImage2 from "../assets/user-picture-minion.jpg";
import userImage3 from "../assets/user-picture-monster.jpg";
import userImage4 from "../assets/user-picture-eyeballs.jpg";

const Sidebar = ({ isHamburgerMenuOpen, setIsHamburgerMenuOpen, handleClick, user }) => {
	return (
		<section
			id='hamburger'
			className={
				isHamburgerMenuOpen
					? "absolute top-0 right-0 left-0 bg-slate-800 w-full text-5xl flex flex-col justify-content-center z-40 origin-top animate-open-menu"
					: "absolute top-0 right-0 left-0 bg-slate-800 w-full text-5xl hidden flex-col justify-content-center z-40 origin-top animate-open-menu"
			}
		>
			<ul className='flex flex-col min-h-[120vh] w-full items-center py-8 sidebar-links'>
				<li className='w-full text-center text-white mt-16 py-6 hover:opacity-90 hover:bg-slate-700'>
					<Link to='/' onClick={() => setIsHamburgerMenuOpen(false)}>
						Track Workout
					</Link>
				</li>
				<li className='w-full text-center text-white py-6 hover:opacity-90 hover:bg-slate-700'>
					<Link to='/generateworkout' onClick={() => setIsHamburgerMenuOpen(false)}>
						Generate Workout
					</Link>
				</li>
				<li className='text-white text-sm px-8 py-3 rounded-lg'>{user.user.email}</li>
				<li>
					<button
						className='text-white text-md px-8 py-3 border-2 border-white rounded-lg mt-1 hover:bg-purple-500 hover:text-white hover:bg-opacity-60'
						onClick={handleClick}
					>
						Log out
					</button>
				</li>
			</ul>
		</section>
	);
};

export default Sidebar;
