import cardCss from "./ImageCard.module.css"

export default function ImageCard({ image, onClick }) {
  return (
    <li key={image.id} className={cardCss.item} >
      <div onClick={() => onClick(image)}>
        <img className={cardCss.img} src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
};
