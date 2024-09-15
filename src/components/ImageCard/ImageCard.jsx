import cardCss from "./ImageCard.module.css"

export default function ImageCard({ image, onClick }) {
  return (
    <li className={cardCss.item} onClick={() => onClick(image)}>
      <div>
        <img className={cardCss.img} src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
};
