import React, { useContext } from "react";
import Map from "../map";
import Profile from "../profile";
import Header from "../header";
import LoginPage from "../loginPage";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import s from "./App.module.css";
import { Context } from "../../state/context";
import { withAuth } from "../../state/context";

const PAGES = {
  map: <Map />,
  profile: <Profile />,
};

const App = () => {
  const { isLoggedIn, currentPage } = useContext(Context);

  return (
    <>
      <CssBaseline />
      {isLoggedIn ? (
        <div className={s.flexWrap}>
          <Header />
          <main className={s.main}>
            <Map />
            <section className={s.absolute}>{PAGES[currentPage]}</section>
          </main>
        </div>
      ) : (
        <LoginPage />
      )}
      <ToastContainer hideProgressBar />
    </>
  );
};

export default withAuth(App);
