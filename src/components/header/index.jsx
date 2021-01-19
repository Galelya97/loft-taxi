import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  this.props.navigateTo("map");
                }}
              >
                Map
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.props.navigateTo("profile");
                }}
              >
                Profile
              </button>
            </li>
            <li>
              <button onClick={this.props.onLogout}>Exit</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
