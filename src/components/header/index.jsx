import React, { useContext } from "react";
import style from "./styles.module.css";
import logo from "../../assets/logo-header.png";
import { Button } from "@material-ui/core";
import { Context } from "../../state/context";

const Header = () => {
  const value = useContext(Context);

  return (
    <header>
      <nav className={style.headerNav}>
        <img src={logo} alt="логотип" className={style.logo} />
        <ul className={style.headerList}>
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

export default Header;
