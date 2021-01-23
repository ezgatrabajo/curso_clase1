import React, { Fragment, useState } from "react";

const Saludo = () => {
  const [contador, setContador] = useState(0);

  const eventoClick = () => {
    console.log("Aumentar");
    setContador(contador + 1);
  };

  return (
    <Fragment>
      <h2>Saludo</h2>
      <hr />
    </Fragment>
  );
};

export default Saludo;
