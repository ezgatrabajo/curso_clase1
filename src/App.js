import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Saludo from "./componentes/Saludo";
//const shortid = require("shortid");
import shortid from "shortid";

export default function App() {
  const [tarea, setTarea] = React.useState("");
  const [tareas, setTareas] = React.useState([]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">PROPS APP</h1>
      <hr />
      <Saludo persona="ezequiel" />
      <Saludo persona="juanito" />
      <Saludo />
    </div>
  );
}
