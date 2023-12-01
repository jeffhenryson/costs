import style from "../layout/LinkButton.module.css";
import { Link } from "react-router-dom";

function LinkButton({ to, text }) {
  return (
    <div className={style.linkButton}>
      <Link className={style.btn} to={to}>
        {text}
      </Link>
    </div>
  );
}

export default LinkButton;
