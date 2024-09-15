import moreCss from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className="load-more-btn">
      <button onClick={onClick}>Load more</button>
    </div>
  )
}