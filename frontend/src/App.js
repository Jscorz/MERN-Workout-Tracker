import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GenerateWorkout from "./pages/GenerateWorkout";
import GenerateStretch from "./pages/GenerateStretch";

function App() {
	const { user } = useAuthContext();

	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<div className='max-w-full px-5 md:px-20 md:py-5'>
					<Routes>
						<Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
						<Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
						<Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
						<Route
							path='/generateworkout'
							element={!user ? <Signup /> : <GenerateWorkout />}
						/>
						<Route
							path='/generatestretch'
							element={!user ? <Signup /> : <GenerateStretch />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
