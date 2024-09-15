import errorCss from "./ErrorMessage.module.css"

export default function ErrorMessage({ message }) {
  return <div className={errorCss.message}>{message}</div>;
}

