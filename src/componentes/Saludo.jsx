import React, { Fragment, useState } from "react";

const Saludo = () => {
  const [contador, setContador] = useState(0);

  const eventoClick = () => {
    console.log("Aumentar");
    setContador(contador + 1);
  };

  return (
    <Fragment>
      <hr />
      <h2>Saludo</h2>
    </Fragment>
  );
};

export default Contador;
