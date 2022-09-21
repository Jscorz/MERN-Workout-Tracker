import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useChangeUserPicture = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);

	const { user, dispatch } = useAuthContext();

	const changePicture = async (userpicture, _id) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch("/api/user/userpicture", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
			body: JSON.stringify({
				email: user.email,
				userpictureChoice: userpicture,
				_id,
			}),
		});

		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}
		if (response.ok) {
			// update loading state
			setIsLoading(false);
			dispatch({ type: "CHANGE_PICTURE", payload: json });
			dispatch({ type: "LOGIN", payload: json });
			return json;
		}
	};

	return { changePicture, isLoading, error };
};
