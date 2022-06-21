import { Link } from "react-router-dom";
import logo from "../assets/Reps-Logger.svg";
const Navbar = () => {
	return (
		<header>
			<div className='flex items-center justify-between max-w-full bg-gray-300 px-16 py-10 mx-auto'>
				<Link to='/'>
					<img src={logo} alt='' />
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
