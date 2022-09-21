import React from "react";
import userImage1 from "../assets/user-picture-mario.jpg";
import userImage2 from "../assets/user-picture-minion.jpg";
import userImage3 from "../assets/user-picture-monster.jpg";
import userImage4 from "../assets/user-picture-eyeballs.jpg";
import { useAuthContext } from "../hooks/useAuthContext";
import { useChangeUserPicture } from "../hooks/useChangeUserPicture";

const UserPictureModal = () => {
	const { user } = useAuthContext();
	const { changePicture } = useChangeUserPicture();

	const HandleSubmit = async () => {
		await changePicture("2", user.user._id);
		console.log(user.user);
	};

	return (
		<section className='absolute top-20 left-45 z-40 h-24 min-w-56 p-5 mr-2 border-2 border-white bg-slate-700 shadow-2xl rounded-lg flex flex-col items-center justify-center'>
			<h1 className='text-center text-white pb-1'>
				Change Your User Picture
			</h1>
			<div className='flex items-center justify-center'>
				<img
					src={userImage1}
					alt=''
					id='1'
					className='hidden rounded-full h-12 mr-2 border-2 transition hover:opacity-50 cursor-pointer md:block relative'
					onClick={HandleSubmit}
				/>

				<img
					src={userImage2}
					alt=''
					id='2'
					className='hidden rounded-full h-12   mr-2 border-2 transition hover:opacity-50 cursor-pointer md:block'
					onClick={HandleSubmit}
				/>

				<img
					src={userImage3}
					alt=''
					id='3'
					className='hidden rounded-full h-12   mr-2 border-2 transition hover:opacity-50 cursor-pointer md:block'
					onClick={HandleSubmit}
				/>

				<img
					src={userImage4}
					alt=''
					id='4'
					className='hidden rounded-full h-12   border-2 transition hover:opacity-50 cursor-pointer md:block'
					onClick={async () =>
						await changePicture(user.user.email, "3", user.user._id)
					}
				/>
			</div>
		</section>
	);
};

export default UserPictureModal;
