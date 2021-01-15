import React from "react";
import "./style.css";
import MarcasForm from "./componentes/MarcasForm";
import Variables from "./componentes/Variables";
import Eventos from "./componentes/Eventos";
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Bienvenido</p>
      <MarcasForm />
      <Variables />
      <Eventos />
      <Contador />
    </div>
  );
}
