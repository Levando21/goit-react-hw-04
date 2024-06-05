/** @format */

import { useState, useRef, useEffect } from "react";
import "./App.css";

import getImages from "./api/api";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import ImageCard from "./components/ImageCard";

const modalInitialParams = {
	isOpen: false,
	url: "",
	description: "",
};

export default function App() {
	const [searchImage, setSearchImage] = useState("");
	const [images, setImages] = useState([]);
	const [loading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [page, setPage] = useState(1);
	const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
	const [modalParams, setModalParams] = useState(modalInitialParams);

	const appRef = useRef();

	useEffect(() => {
		if (searchImage === "") {
			return;
		}

		async function getData() {
			try {
				setIsLoading(true);
				setIsError(false);
				const { results, total_pages } = await getImages(searchImage, page);
				setImages((prevImages) => {
					return [...prevImages, ...results];
				});
				setShowLoadMoreBtn(total_pages && total_pages !== page);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		getData();
	}, [searchImage, page]);

	const handleSearch = (newImage) => {
		setSearchImage(newImage);
		setPage(1);
		setImages([]);
	};

	const handleLoadMoreClick = () => {
		setPage(page + 1);
	};

	const handleImageClick = (url, description) => {
		setModalParams({ isOpen: true, url, description });
	};

	const handleModalClose = () => {
		setModalParams(modalInitialParams);
	};

	useEffect(() => {
		if (page === 1) return;

		appRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
	}, [images, page]);

	return (
		<div ref={appRef}>
			<SearchBar submit={handleSearch} />

			{isError && <ErrorMessage />}

			{images.length > 0 && (
				<ImageGallery
					cards={images}
					onImageClick={handleImageClick}
				/>
			)}

			{images.length > 0 && loading && showLoadMoreBtn && (
				<LoadMoreBtn onClick={handleLoadMoreClick} />
			)}

			{loading && <Loader />}
			{modalParams && (
				<ImageModal
					url={modalParams.url}
					description={modalParams.description}
					isOpen={modalParams.isOpen}
					onClose={handleModalClose}
				/>
			)}
		</div>
	);
}
