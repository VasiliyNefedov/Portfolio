import React from "react";
import "./Content.css";
import Main from "./Main/Main";
import Messages from "./Messages/Messages";
import { Route } from "react-router-dom";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import { render } from "@testing-library/react";
import Projects from "./Projects/Projects";

const Content = props => {
  return (
    <div className="content">
      <Route exact path="/main" component={Main} />
      <Route exact path="/" component={Main} />
      <Route
        exact
        path="/messages"
        render={() => (
          <Messages messageData={props.messageData} addPost={props.addPost} />
        )}
      />
      <Route path="/about" component={About} />
      <Route exact path="/projects" render={() => <Projects />} />
      <Route path="/contacts" component={Contacts} />
    </div>
  );
};

export default Content;
