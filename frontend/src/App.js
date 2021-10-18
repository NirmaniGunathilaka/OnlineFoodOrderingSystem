import logo from './logo.svg';
import React from "react";
import './App.css';
import Home from './components/Home';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
