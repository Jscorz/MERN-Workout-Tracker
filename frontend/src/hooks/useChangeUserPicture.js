import { useState } from "react";

export const useChangeUserPicture = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);

	const changePicture = async (email, userpicture, _id) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch("/api/user/userpicture", {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, userpicture, _id }),
		});
		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}
		if (response.ok) {
			// update loading state
			console.log(json);
			console.log("success");
			setIsLoading(false);
		}
	};

	return { changePicture, isLoading, error };
};
