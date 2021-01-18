import React from "react";

export class Header extends React.Component {
  navigateTo = (page) => {
    // this.setState({ currentPage: page });
  };
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  this.navigateTo("home");
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.navigateTo("about");
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.navigateTo("profile");
                }}
              >
                Profile
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
