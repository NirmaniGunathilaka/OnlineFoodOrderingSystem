import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/signup";
import SignInOutContainer from "./containers";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Login />
      // <Signup /> */}
      <SignInOutContainer />
    </div>
  );
}

export default App;
