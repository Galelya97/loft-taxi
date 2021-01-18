import React from "react";

export class Login extends React.Component {
  handleClick() {
    console.log("adsada");
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.handleClick}>Войти</button>
      </div>
    );
  }
}
