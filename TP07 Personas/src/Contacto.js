import React, { useState } from 'react';
import './App.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
    });
  };

  return (
    <div className="App Contenedor-Mayor letra">
      <h1>Ingrese los datos para agregar a una persona a la lista:</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Ingresa el nombre de la persona
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Ingresa el apellido de la persona
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Ingresa la edad de la persona
          </label>
          <input
            type="number"
            className="form-control"
            id="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Ingresa el email de la persona
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar los datos
        </button>
      </form>
    </div>
  );
}

export default Contacto;
