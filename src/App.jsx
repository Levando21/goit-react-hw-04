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
import LoadMoreButton from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";

function App() {
	const modalInitialParams = {
		isOpen: false,
		url: "",
		description: "",
	};
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState("");
	const [modalParams, setModalParams] = useState(modalInitialParams);

	useEffect(() => {
		const fetchImages = async (query) => {
			try {
				setLoading(true);

				const data = await getLink(query, page);
				setImages((prev) => [...prev, ...data]);
				setShowLoadMoreBtn(total_pages && total_pages !== page);
				setError(false);
			} catch (e) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		query && fetchImages();
	}, [page, query]);

	const handleSearchSubmit = (searchQuery) => {
		setQuery(searchQuery);
	};

	const buttonLoad = async () => {
		setPage(page + 1);
	};

	const handleImageClick = (url, description) => {
		setModalParams({ isOpen: true, url, description });
	};

	const handleModalClose = () => {
		setModalParams(modalInitialParams);
	};

	return (
		<>
			<SearchBar submit={handleSearchSubmit} />
			{error && <ErrorMessage />}
			{images.length > 0 && <ImageGallery images={images} />}
			{images.length > 0 && <LoadMoreButton onClick={buttonLoad} />}
			{loading && <Loader />}
			<ImageModal
				url={modalParams.url}
				description={modalParams.description}
				isOpen={modalParams.isOpen}
				onClose={handleModalClose}
			/>
		</>
	);
}

export default App;
