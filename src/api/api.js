/** @format */
import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getLink = async (searchQuery, page) => {
	const { data } = await axios.get("/search/photos", {
		params: {
			client_id: API_KEY,
			query: searchQuery,
			page,
			per_page: 12,
		},
	});
	return data.results;
};
