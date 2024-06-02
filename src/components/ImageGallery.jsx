/** @format */

import ImageCard from "./ImageCard";

const ImageGallery = ({ images }) => {
	return (
		<ul>
			{images.map((image, index) => (
				<li key={index}>
					<ImageCard
						imgUrl={image.urls.regular}
						imgSrc={image.alt_description}
					/>
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
