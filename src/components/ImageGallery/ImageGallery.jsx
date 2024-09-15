import ImageCard from "../ImageCard/ImageCard"
import galleryCss from "./ImageGallery.module.css"

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={galleryCss.list}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};


