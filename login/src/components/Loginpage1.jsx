import React, { Component } from "react";

class Loginpage1 extends Component {
  login(props) {
    console.warn("state", this.state);
    fetch("http://localhost:3000/login")  
    .then((result) => {
      result.json().then((resp) => {
        this.setState(resp)
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Login page 1</h1>
        <div>
          <input
            type="text"
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="Enter log in details"
          ></input>
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => this.setState({ password: e.target.value })}
            placeholder="Enter password"
          ></input>
          <br />
          <br />
          <button onClick={() => this.login()}>Log in</button>
        </div>
      </div>
    );
  }
}

export default Loginpage1;
