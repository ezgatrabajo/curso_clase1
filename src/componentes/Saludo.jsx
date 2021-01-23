import React, { Fragment, useState } from "react";

const Saludo = props => {
  const [contador, setContador] = useState(0);

  const eventoClick = () => {
    console.log("Aumentar");
    setContador(contador + 1);
  };
  console.log(props);
  return (
    <Fragment>
      <h2>Saludo</h2>
      <hr />
      <h5>{props.persona}</h5>
    </Fragment>
  );
};

export default Saludo;
