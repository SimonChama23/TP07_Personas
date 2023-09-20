import React from 'react';
import Personas from './Personas.json';
import './App.css';

function Estadisticas() {
  const personasMayores = Personas.filter((p) => p.edad > 35); //aca use un filter() para encontrar las personas mayores a 35 años antes que usar un bucle foreach
  const personaMayor = personasMayores.reduce((prev, current) =>
    prev.edad > current.edad ? prev : current
  );

  const personaMenor = Personas.reduce((prev, current) =>
    prev.edad < current.edad ? prev : current
  );

  return (
    <div className="App Contenedor-Mayor letra">
      <div className="card">
        <div className="card-body">
          Personas mayores a 35 años: {personasMayores.length} persona/s
        </div>
      </div>
      <br />
      <br />
      <div className="card">
        <div className="card-body">
          Persona con la mayor edad: {personaMayor.nombre}
        </div>
      </div>
      <br />
      <br />
      <div className="card">
        <div className="card-body">
          Persona con la menor edad: {personaMenor.nombre}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Estadisticas;
