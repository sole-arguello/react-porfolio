import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link className="navbar__title" to="/">
        Portfolio
      </Link>

      <div className="navbar__menu">
        <div className="navbar__menu--btn" onClick={handleMenuToggle}>
          {menuOpen ? <FaBars size={30} color="white" /> : <FaXmark size={30} color="white" />}
        </div>

        <ul className={`navbar__menu--items ${menuOpen ? "open" : ""}`}>
          <li className="navbar__menu--item-list">
            <HashLink className="navbar__menu--item-list_link" to="#about">
              Sobre Mi
            </HashLink>
          </li>
          <li className="navbar__menu--item-list">
            <HashLink className="navbar__menu--item-list_link" to="#experience">
              Experiencia
            </HashLink>
          </li>
          <li className="navbar__menu--item-list">
            <HashLink className="navbar__menu--item-list_link" to="#projects">
              Projectos
            </HashLink>
          </li>
          <li className="navbar__menu--item-list">
            <HashLink className="navbar__menu--item-list_link" to="#contact">
              Contacto
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
