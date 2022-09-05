import { Link } from "react-router-dom";
import logo from "../assets/Reps-Logger.svg";
const Navbar = () => {
	return (
		<header>
			<div className='flex items-center justify-between max-w-full bg-primary bg-opacity-90 px-20 py-6 mx-auto'>
				<Link to='/'>
					<img
						src={logo}
						alt=''
						className='hover:opacity-80 duration-200 transition'
					/>
				</Link>
				<nav>
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
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
