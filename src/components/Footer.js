import React from "react";

const Footer = () => {
  return (
    <div className="contenedor-footer">
      <p>Esta es mi primer practica consumiendo una API</p>
      <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener">
        https://rickandmortyapi.com/
      </a>
      <p className="hecho">
        <span className="por">Por</span>
        <span className="nombre">Juan Pablo</span>
        <span className="year">2021</span>
      </p>
    </div>
  );
};

export default Footer;
