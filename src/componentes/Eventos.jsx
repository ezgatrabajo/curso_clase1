import React from "react";

const Eventos = () => {

  const eventoClick = () =>{
    console.log('hiciste click')
  }

  return (
    <div>
    <hr/>
      <button onClick={()=> eventoClick() }>boton</button>
    </div>
  );
};

export default Eventos;
