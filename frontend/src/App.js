import React from "react";
import "./App.css";
import Routes from "./createRoutes";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
