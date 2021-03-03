import React from "react";
import style from "./styles.module.css";
import logo from "../../assets/logo-header.png";
import { NavLink } from "react-router-dom";
const Header = ({ logOut }) => {
  return (
    <header>
      <nav className={style.headerNav}>
        <img src={logo} alt="логотип" className={style.logo} />
        <ul className={style.headerList}>
          <li>
            <NavLink
              activeClassName={style.headerLinkActive}
              className={style.headerLink}
              to="/map"
            >
              Карта
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={style.headerLinkActive}
              className={style.headerLink}
              to="/profile"
            >
              Профиль
            </NavLink>
          </li>
          <li>
            <button className={style.headerLink} onClick={logOut}>
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
