import React from "react";
import { Home } from "../home/Home";
import { About } from "../about/About";
import { Profile } from "../profile/Profile";
import "./App.css";
import { Header } from "../header";
import { Login } from "../login";

const PAGES = {
  home: <Home />,
  about: <About />,
  profile: <Profile />,
};

class App extends React.Component {
  state = { currentPage: "home", isLogin: false };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };
  logIn = () => {
    this.setState({ isLogin: true });
  };
  render() {
    if (this.state.isLogin) {
      return (
        <>
          <Header />

          <main>
            <section>{PAGES[this.state.currentPage]}</section>
          </main>
        </>
      );
    } else {
      return <Login onLogin={this.logIn} />;
    }
  }
}

export default App;
