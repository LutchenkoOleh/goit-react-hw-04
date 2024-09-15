import loadCss from "./Loader.module.css"
import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={loadCss.loader}>
      <Circles height="20" width="20" color="#0073e6" ariaLabel="loading" />
    </div>
  );
}

