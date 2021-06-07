import React from "react";

const Tarjeta = ({ id, image, name, species, gender }) => {
  return (
    <div className="Card">
      <div className="div-img hidden">
        <img src={image} alt={id} />
      </div>
      <p className="nombre-card">{name} </p>
      <label>Especie</label>
      <p className="info-card"> {species} </p>
      <label>Genero</label>
      <p className="info-card"> {gender} </p>
    </div>
  );
};

export default Tarjeta;
