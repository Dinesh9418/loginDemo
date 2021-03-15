import React, { Component } from "react";

class Loginpag2 extends Component {
  submitDetails() {
    console.warn("state", this.state);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headres: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(result);
      });
    });
  }
  render() {
    return (
      <>
        <div>
          <h1>Login Details</h1>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder="Enter your Name"  
          ></input>
          <br/><br/>
          <input
            type="text"
            onChange={(e) => this.setState({ address: e.target.value })}
            placeholder="Enter your address"
          ></input>
          <br/><br/>
          <input
            type="text"
            onChange={(e) => this.setState({ contact: e.target.value })}
            placeholder="Enter your contact number"
          ></input>
          <br/><br/>
          <button onClick={() => this.submitDetails()}>Log in</button>
        </div>
      </>
    );
  }
}
export default Loginpag2;
