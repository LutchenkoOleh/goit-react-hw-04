import Modal from "react-modal";
import modalCss from "./ImageModal.module.css"

export default function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={modalCss.modal}
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      {image && (
        <>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
          <button onClick={onRequestClose}>Close</button>
        </>
      )}
    </Modal>
  );

}