/** @format */

const SearchBar = ({ onSubmit, value, onChange }) => {
	return (
		<header>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
					value={value}
					onChange={onChange}
				/>
				<button type="submit">Search</button>
			</form>
		</header>
	);
};

export default SearchBar;
