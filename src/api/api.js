/** @format */
import axios from "axios";

export const getLink = async () => {
	const { data } = await axios.get(
		"https://jsonplaceholder.typicode.com/todos/"
	);
	return data;
};
