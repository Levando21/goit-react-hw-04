/** @format */

export default function LoadMoreBtn({ onClick, disabled }) {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}>
			Load more...
		</button>
	);
}
