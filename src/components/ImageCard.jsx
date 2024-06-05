/** @format */

export default function ImageCard({ card, onImageClick }) {
	return (
		<div>
			<img
				src={card.urls.small}
				alt={card.alt_description}
				onClick={onImageClick}
			/>
			<ul>
				<li>
					<p>Photo by {card.user.name}</p>
				</li>
				<li>
					<p>Likes: {}card.likes</p>
				</li>
			</ul>
		</div>
	);
}
