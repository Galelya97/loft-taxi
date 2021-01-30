import React, { useContext } from "react";
import s from "./styles.module.css";
import logo from "../../assets/logo-header.png";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Context } from "../../state/context";

const Header = () => {
  const value = useContext(Context);

  return (
    <header>
      <nav className={s.headerNav}>
        <img src={logo} alt="логотип" className={s.logo} />
        <ul className={s.headerList}>
          <li>
            <Button
              color="primary"
              onClick={() => {
                value.setCurrentPage("map");
              }}
            >
              Карта
            </Button>
          </li>
          <li>
            <Button
              color="primary"
              onClick={() => {
                value.setCurrentPage("profile");
              }}
            >
              Профиль
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={value.logOut}>
              Выйти
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  navigateTo: PropTypes.func,
  onLogout: PropTypes.func,
};

export default Header;
