/** @format */
import Modal from "react-modal";
import "../App.css";

export default function ImageModal({ isOpen, onClose, url, description }) {
	return (
		<Modal
			isOpen={isOpen}
			ariaHideApp={false}
			onRequestClose={onClose}
			className="modal"
			overlayClassName="overlayModal"
			shouldCloseOnEsc={true}>
			<img
				className="imgModal"
				src={url}
				alt={description}
			/>
		</Modal>
	);
}
