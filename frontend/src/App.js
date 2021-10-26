import React from "react";
import "./App.css";
import Routes from "./createRoutes";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Appbar from "./components/Appbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Appbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
