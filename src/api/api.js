/** @format */
import axios from "axios";

const API_KEY = "fluBw_2FLnShYVPGvaZQIlXP-iK4rxdXZ8RRIxslK9Y";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getLink = async (query, page = 1) => {
	const { data } = await axios.get("/search/photos", {
		params: {
			client_id: API_KEY,
			query: query,
			page: page,
		},
	});
	return data.result;
};
