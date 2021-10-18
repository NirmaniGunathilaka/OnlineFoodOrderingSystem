import logo from './logo.svg';
import React from "react";
import './App.css';
import Home from './components/Home';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
    </div>
  );
}

export default App;
