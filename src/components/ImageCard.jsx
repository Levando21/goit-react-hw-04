/** @format */

const ImageCard = ({ imgUrl, imgSrc }) => {
	return (
		<div>
			<img
				src={imgUrl}
				alt={imgSrc}
				width="400"
				height="400"
			/>
		</div>
	);
};

export default ImageCard;
