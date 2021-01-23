import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import MarcasForm from "./componentes/MarcasForm";
import Variables from "./componentes/Variables";
import Eventos from "./componentes/Eventos";
import Contador from "./componentes/Contador";
import Formularios from "./componentes/Formularios";
//const shortid = require("shortid");
import shortid from "shortid";

export default function App() {
  const [tarea, setTarea] = React.useState("");
  const [tareas, setTareas] = React.useState([]);

  const agregarTarea = e => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log("Campo vacio");
      return;
    }
    setTareas([...tareas, { tarea, id: shortid.generate() }]);
    setTarea("");
  };

  const eliminarTarea = id => {
    const arrayFiltrado = tareas.filter(item => item.id !== id);
    setTareas(arrayFiltrado);
  };
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState("");

  // onClick={() => editar(item)}
  const editar = item => {
    setModoEdicion(true);
    setTarea(item.tarea);
    setId(item.id);
  };

  const editarTarea = e => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log("Campo vacio");
      return;
    }

    const arrayEditado = tareas.map(item =>
      item.id === id ? { id, tarea } : item
    );
    setTareas(arrayEditado);
    setModoEdicion(false);
    setTarea("");
    setId("");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">PROPS APP</h1>
      <hr />
    </div>
  );
}
