/** @format */
import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { getLink } from "./api/api";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import ErrorMessage from "./components/ErrorMessage";

function App() {
	const [term, setTerm] = useState("");
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async (term) => {
		event.preventDefault();

		setLoading(true);
		try {
			const data = await getLink(term);
			setImages(data);
			setError(false);
		} catch (e) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleSubmit();
		console.log("Fetched images:", images);
	}, []);

	return (
		<>
			<SearchBar
				onSubmit={handleSubmit}
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
			{error && <ErrorMessage />}
			{loading ? <Loader /> : <ImageGallery images={images} />}
		</>
	);
}

export default App;
