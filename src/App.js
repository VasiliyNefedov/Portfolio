import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav-bar/Nav-bar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <Content messageData={props.messageData} dispatch={props.dispatch} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
