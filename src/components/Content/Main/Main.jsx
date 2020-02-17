import React from "react";
import './Main.css';
import Avatar from './Avatar/Avatar';
import Brief from "./Brief/Brief";
import MyStack from "./MyStack/MyStack";

const Main = () => {
  return (
    <div className="main">
        <Avatar />
        <Brief />
        <MyStack />
    </div>
  );
};

export default Main;
