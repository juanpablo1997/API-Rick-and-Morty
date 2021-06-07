import React, { useEffect, useState } from "react";
import Tarjeta from "./components/Tarjeta";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
  // Creo el state amiguis ques es un arreglo:
  const [amiguis, setAmiguis] = useState([]);

  /*   Este useEffect me garantiza que se haga una 
  Petición a la API cuando se recarga el navegador
  por primera vez  y solo una vez por eso no tiene
  dependencias. */
  useEffect(() => {
    obtenerAmiguis();
  }, []);

  // Consumo el Api usando fetch y el async await:
  const obtenerAmiguis = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();

    /* Creo una variable objeto, luego recorro el arreglo
    que me devolvio la petición a la API en la variable results, 
    la recorro con el .map y extraigo los datos del personaje 
    que almaceno en la variable objeto que después agrego al 
    state amiguis que es un arreglo de objetos a traves de
    setAmiguis().*/
    const objeto = results.map((index) => {
      return {
        id: index.id,
        name: index.name,
        species: index.species,
        gender: index.gender,
        image: index.image,
      };
    });
    setAmiguis(objeto);
  };

  return (
    <div className="App">
      <Header />
      <ul className="Lista-objetos">
        {amiguis.map((index) => (
          <Tarjeta key={index.id} {...index} />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
