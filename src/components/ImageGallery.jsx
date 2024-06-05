/** @format */

import ImageCard from "./ImageCard";

export default function ImageGallery({ cards, onImageClick }) {
	return (
		<ul>
			{cards.map((card) => (
				<li key={card.id}>
					<ImageCard
						card={card}
						onImageClick={() => onImageClick(card.urls.regular, card.alt_description)}
					/>
				</li>
			))}
		</ul>
	);
}
