import style from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={style.copy_right}>
        <span>costs</span> &copy; 2023{" "}
      </p>
    </footer>
  );
}

export default Footer;
