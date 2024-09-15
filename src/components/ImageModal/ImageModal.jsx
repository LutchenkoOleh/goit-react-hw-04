import Modal from "react-modal";
import modalCss from "./ImageModal.module.css"
import { useEffect } from "react";

export default function ImageModal({ isOpen, onRequestClose, image }) {

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onRequestClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={modalCss.modal}
      overlayClassName={modalCss.overlay}
      ariaHideApp={false}
    >
      {image && (
        <div className={modalCss.wrap}>
          <img src={image.urls.regular} alt={image.alt_description} className={modalCss.img} />
          <div className={modalCss.description} >
            <p>Author: {image.user.name}</p>
            <p>Likes: {image.likes}</p>
          </div>
        </div>
      )}
    </Modal>
  );

}