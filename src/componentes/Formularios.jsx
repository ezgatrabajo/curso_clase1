import React, { Fragment, useState } from "react";

const Formularios = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const guardarDatos = e => {
    e.preventDefault();
    console.log("procesando datos...");
  };

  const eventoClick = () => {
    console.log("hiciste click");
    setNombre("nuevo valor");
    console.log("valor de nombre:" + nombre);
    console.log(nombre);
    if (!nombre.trim()) {
      console.log("esta vacio nombre");
    }
    if (!descripcion.trim()) {
      console.log("esta vacio descripcion");
    }
  };

  return (
    <Fragment>
      <hr />

      <h2>Formularios</h2>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="ingrese nombre"
          onChange={e => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="ingrese Descripcion"
          onChange={e => setDescripcion(e.target.value)}
        />

        <button type="submit" onClick={() => eventoClick()}>
          Guardar
        </button>
      </form>
    </Fragment>
  );
};

export default Formularios;
