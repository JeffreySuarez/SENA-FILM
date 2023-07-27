import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const index = () => {
  return (
    <div className="content-Footer">
      <div className="footer-left">
        <h2>
          <span className="logo-left">SOBRE</span>
          <span className="logo-right">NOSOTROS</span>
        </h2>
        <p>APRENDICES SENA; PROGRAMA "ANALISIS Y DESARRROLLO DE SOFTWARE"</p>
      </div>
      <hr />
      <div className="footer-mid">
        <h3 className="footer-mid-subtitulo">DESARROLLADORES</h3>
        <div className="footer-lista">
          <ul>
            <li>Jeffrey Alexander Suarez Rey</li>
            <li>Alejandra Duque</li>
          </ul>
        </div>
        <p>APRENDICES SENA</p>
      </div>
      <hr />
      <div className="footer-right">
        <h1>
          <span className="logo-left">SENA</span>
          <span className="logo-right">FILM</span>
        </h1>
        <div className="footer-menu">
          <ul className="footer-list-menu">
            {/* <NavLink className="list-menu" to="/CoderFilm">
              Home
            </NavLink> */}
            <NavLink className="list-menu list-menu-menu" to="/CoderFilm/Peliculas">
              Peliculas
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
