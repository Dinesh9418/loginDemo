import React, { Component } from 'react'

class Loginpage3 extends Component {
    showData(){
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
            <div>
            <div>
                <h1>Log in data</h1>
                <button onClick = {()=>this.showData()}>Show data</button>
            </div>                
            </div>
        )
    }
}

export default Loginpage3;