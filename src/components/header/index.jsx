import React from "react";

export class Header extends React.Component {
  render() {
    const { navigateTo, onLogout } = this.props;

    return (
      <header>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  navigateTo("map");
                }}
              >
                Map
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("profile");
                }}
              >
                Profile
              </button>
            </li>
            <li>
              <button onClick={onLogout}>Exit</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
