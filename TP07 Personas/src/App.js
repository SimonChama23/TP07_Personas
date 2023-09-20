import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Inicio from "./Inicio";
import Persona from "./Persona";
import Estadisticas from "./Estadisticas";
import Contacto from "./Contacto";
import { MyContent } from "./MyContext";

function App() {
  const [text, setText] = useState("");

  return (
    <MyContent.Provider value={{ text, setText }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="persona/:id" element={<Persona />} />
            <Route path="estadisticas" element={<Estadisticas />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyContent.Provider>
  );
}

export default App;

