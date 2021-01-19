import React from "react";
import { Map } from "../map";
import { Profile } from "../profile/Profile";
import { Header } from "../header";
import { LoginPage } from "../loginPage";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const PAGES = {
  map: <Map />,
  profile: <Profile />,
};

class App extends React.Component {
  state = { currentPage: "home", isLoggedIn: false, userLogin: "" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };
  logIn = (userLogin) => {
    this.setState({ isLoggedIn: true, userLogin: userLogin });
  };
  logOut = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn, userLogin, currentPage } = this.state;

    return (
      <>
        <CssBaseline />
        {isLoggedIn ? (
          <>
            <Header onLogout={this.logOut} navigateTo={this.navigateTo} />

            {userLogin}

            <main>
              <section>{PAGES[currentPage]}</section>
            </main>
          </>
        ) : (
          <LoginPage onLogin={this.logIn} />
        )}
        <ToastContainer hideProgressBar />
      </>
    );
  }
}

export default App;
