import style from "./Navbar.module.css";
import Container from "./Container";
import { Link } from "react-router-dom";
import Logo from "../img/costs_logo.png";

/**
 * Navbar Component
 * @returns {JSX.Element} Retorna o JSX que representa a barra de navegação.
 */
function Navbar() {
  return (
    <nav className={style.navbar}>
      <Container>
        <Link to="/">
          <img src={Logo} alt="Costs" />
        </Link>
        <ul className={style.list}>
          <li className={style.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={style.item}>
            <Link to="/Projects">Projetos</Link>
          </li>
          <li className={style.item}>
            <Link to="/Company">Empresa</Link>
          </li>
          <li className={style.item}>
            <Link to="/Contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
