import React from "react";
import { Map } from "../map";
import { Profile } from "../profile/Profile";
import { Header } from "../header";
import { LoginPage } from "../loginPage";
import { ToastContainer } from "react-toastify";
import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const PAGES = {
  map: <Map />,
  profile: <Profile />,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: "home", isLogin: false, login: "" };
  }

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };
  logIn = (login) => {
    this.setState({ isLogin: true, login: login });
  };
  logOut = () => {
    this.setState({ isLogin: false });
  };

  render() {
    return (
      <>
        {this.state.isLogin ? (
          <>
            <Header onLogout={this.logOut} navigateTo={this.navigateTo} />

            {this.state.login}

            <main>
              <section>{PAGES[this.state.currentPage]}</section>
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
