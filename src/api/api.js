/** @format */
import axios from "axios";

const ACCESS_KEY = "mxqhNE-TNScpFD42LOXowhVB3AxvnPbafuRFLM-WRMI";
axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function getImages(searchImage, page) {
	const response = await axios.get(`/search/photos`, {
		params: {
			client_id: ACCESS_KEY,
			query: searchImage,
			page,
			per_page: 12,
		},
	});

	return response.data;
}
