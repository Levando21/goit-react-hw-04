/** @format */
import axios from "axios";

const API_KEY = "mxqhNE-TNScpFD42LOXowhVB3AxvnPbafuRFLM-WRMi";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const getLink = async (query, page = 1) => {
	const { data } = await axios.get("", {
		params: {
			client_id: API_KEY,
			query: query,
			page: page,
		},
	});
	return data.results;
};
