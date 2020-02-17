import React from "react";
import "./Brief.css";
import { NavLink } from "react-router-dom";

const Brief = () => {
  return (
    <div className="brief decor">
      <div className="brief-text">
        <p>
          Привет! И добро пожаловать на мой небольшой сайт-портфолио. Здесь я
          экспериментирую в Web-разработке и делюсь результатами.
        </p>
        
        <p>
          Если ты <b>HR</b> и хочешь узнать больше - переходи в раздел{" "}
          <NavLink to='/about'>
            "<b>обо мне</b>"
          </NavLink>
          .
        </p>
      </div>
    </div>
  );
};

export default Brief;
