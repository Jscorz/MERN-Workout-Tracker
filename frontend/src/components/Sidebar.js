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
			<ul className='flex flex-col min-h-[180vh] w-full items-center sidebar-links'>
				{user.user.userpicture === "1" && (
					<li className='relative group flex py-3 pr-16 items-center'>
						<img
							src={userImage1}
							alt=''
							className='rounded-full h-12 border-2 border-purple-500 md:block'
						/>
						<span className='text-white text-xs px-2 mt-4 mb-4 rounded-lg'>
							{user.user.email}
						</span>
					</li>
				)}
				{user.user.userpicture === "2" && (
					<li className='relative group flex py-3 pr-16 items-center'>
						<img
							src={userImage2}
							alt=''
							className='rounded-full h-12 border-2 border-purple-500 md:block'
						/>
						<span className='text-white text-xs px-2 mt-4 mb-4 rounded-lg'>
							{user.user.email}
						</span>
					</li>
				)}
				{user.user.userpicture === "3" && (
					<li className='relative group flex py-3 pr-16 items-center'>
						<img
							src={userImage3}
							alt=''
							className='rounded-full h-12 border-2 border-purple-500 md:block'
						/>
						<span className='text-white text-xs px-2 mt-4 mb-4 rounded-lg'>
							{user.user.email}
						</span>
					</li>
				)}
				{user.user.userpicture === "4" && (
					<li className='relative group flex py-3 pr-16 items-center'>
						<img
							src={userImage4}
							alt=''
							className='rounded-full h-12 border-2 border-purple-500 md:block'
						/>
						<span className='text-white text-xs px-2 mt-4 mb-4 rounded-lg'>
							{user.user.email}
						</span>
					</li>
				)}
				<li className='w-full text-center text-3xl text-white mt-6 px-3 py-6 hover:opacity-90 hover:bg-slate-700'>
					<Link to='/' onClick={() => setIsHamburgerMenuOpen(false)}>
						Track Workout
					</Link>
				</li>
				<li className='w-full text-center text-3xl text-white px-3 py-6 hover:opacity-90 hover:bg-slate-700'>
					<Link to='/generateworkout' onClick={() => setIsHamburgerMenuOpen(false)}>
						Generate Workout
					</Link>
				</li>
				<li>
					<button
						className='text-white text-xl mt-4 px-8 py-3 border-2 border-white rounded-lg hover:bg-purple-500 hover:text-white hover:bg-opacity-60'
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
