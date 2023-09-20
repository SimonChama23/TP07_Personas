import React from 'react';
import { Link } from 'react-router-dom';
import Personas from './Personas.json';
import './App.css';

function Inicio() {
  return (
    <div className="App Contenedor-Mayor letra">
      {Personas.map((persona) => (
        <div key={persona.id}>
          <h1>{persona.nombre}</h1>
          <h4>{persona.apellido}</h4>
          <Link to={`/persona/${persona.id}`} className="btn btn-link">
            Ver la información completa de {persona.nombre}
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Inicio;
