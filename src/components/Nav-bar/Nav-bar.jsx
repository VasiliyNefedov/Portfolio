import React from "react";
import "./Nav-bar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="side-bar decor">
      <NavLink to="/main" activeClassName="active">
        <div className="side-bar__item">Главная</div>
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        <div className="side-bar__item">Обо мне</div>
      </NavLink>
      <NavLink to="/messages" activeClassName="active">
        <div className="side-bar__item">Сообщение</div>
      </NavLink>
      <NavLink to="/projects" activeClassName="active">
        <div className="side-bar__item">Проекты</div>
      </NavLink>
      <NavLink to="/contacts" activeClassName="active">
        <div className="side-bar__item">Контакты</div>
      </NavLink>
    </nav>
  );
};

export default NavBar;
