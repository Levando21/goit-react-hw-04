/** @format */

import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ submit }) {
	const handleSubmit = (event) => {
		event.preventDefault();
		const query = event.target.elements.searchImage.value;
		query.trim() === ""
			? toast.error("Error! Field can not be empty!")
			: submit(query);
		event.target.reset();
	};

	return (
		<header>
			<Toaster position="top-left" />
			<form onSubmit={handleSubmit}>
				<input
					name="searchImage"
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
				/>

				<button type="submit">Search</button>
			</form>
		</header>
	);
}
