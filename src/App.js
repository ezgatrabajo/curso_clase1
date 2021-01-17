import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import MarcasForm from "./componentes/MarcasForm";
import Variables from "./componentes/Variables";
import Eventos from "./componentes/Eventos";
import Contador from "./componentes/Contador";
import Formularios from "./componentes/Formularios";

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

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD APP</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {tareas.map(item => (
              <li className="list-group-item" key={item.id}>
                <span className="lead">{item.tarea}</span>
                <button
                  className="btn btn-sm btn-danger float-right mx-2"
                  onClick={() => eliminarTarea(item.id)}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-sm btn-warning float-right"
                  onClick={() => editar(item)}
                >
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">Agregar Tarea</h4>
          <form>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese Tarea"
            />
            <button className="btn btn-dark btn-block" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
