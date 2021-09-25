import React from "react";
import Roupas from "../../components/Roupas";

const Infantil = props => {
  const roupasInfantil = props.roupas.filter(valor => {
    return valor.tipo === "infantil";
  });

  const limite = [29.9, 69.9];

  return <Roupas roupas={roupasInfantil} limite={limite} />;
};

export default Infantil;
