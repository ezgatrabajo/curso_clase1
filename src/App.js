import React from "react";
import "./style.css";
import MarcasForm from "./componentes/MarcasForm";
import Variables from "./componentes/Variables";
import Eventos from "./componentes/Eventos";
import Contador from "./componentes/Contador";
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
