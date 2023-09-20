import './App.css';
import React from 'react';
import Personas from './Personas.json';
import { useParams } from 'react-router-dom';

function Persona() {
    const { id } = useParams();
    const persona = Personas.find((p) => p.id === id);

    if (!persona) {
        return (
            <div className="App">
                <p>Ninguna persona encontrada.</p>
            </div>
        );
    } else {
        return (
            <div className="App Contenedor-Mayor letra">
                <h1>{persona.nombre}</h1>
                <h2>{`${persona.apellido} (${persona.edad})`}</h2>
                <p>{persona.email}</p>
            </div>
        );
    }
}

export default Persona;
