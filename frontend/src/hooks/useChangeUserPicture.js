import { useState } from "react";
import axios from "axios";

export const useChangeUserPicture = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);

	const changePicture = async (userpicture, _id) => {
		setIsLoading(true);
		setError(null);

		const { res } = axios.patch("/api/user/userpicture", {
			userpicture,
			_id,
		});
		return res;

		// const response = await fetch("/api/user/userpicture", {
		// 	method: "PATCH",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: JSON.stringify({
		// 		userpicture,
		// 		_id,
		// 	}),
		// });

		// const json = await response.json();

		// if (!response.ok) {
		// 	setIsLoading(false);
		// 	setError(json.error);
		// }
		// if (response.ok) {
		// 	// update loading state
		// 	localStorage.setItem("user", JSON.stringify(json));
		// 	console.log(json);
		// 	setIsLoading(false);
		// 	return json;
		// }
	};

	return { changePicture, isLoading, error };
};
