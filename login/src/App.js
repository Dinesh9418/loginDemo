import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Loginpage1 from "./components/Loginpage1";
import Loginpag2 from "./components/Loginpag2";
import Loginpage3 from "./components/Loginpage3";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/"> Loginpage1 </Link>
        <br />
        <Link to="/Loginpag2"> Loginpag2 </Link>
        <br />
        <Link to="/Loginpage3"> Loginpage3 </Link>
        <br />

        <Route exact path="/">
          <Loginpage1  />
        </Route>
        <Route path="/Loginpag2">
          <Loginpag2 />
        </Route>
        <Route path="/Loginpage3">
          <Loginpage3 />
        </Route>
      </Router>
    </div>
  );
}

export default App;
