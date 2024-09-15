import moreCss from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={moreCss.more}>
      <button className={moreCss.button} onClick={onClick}>Load more</button>
    </div>
  )
}