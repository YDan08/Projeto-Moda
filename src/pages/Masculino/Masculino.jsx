import React from "react";
import Roupas from "../../components/Roupas";

const Masculino = props => {
  const roupaMasc = props.roupas.filter(valor => valor.tipo === "masculino");

  const limite = [49.9, 219.9];

  return <Roupas roupas={roupaMasc} limite={limite} />;
};

export default Masculino;
