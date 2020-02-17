import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost, subscribe } from "./redux/state";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state from "./redux/state";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <App messageData={state.messageData} addPost={addPost} />,
    document.getElementById("root")
  );
};

subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
