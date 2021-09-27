import React from "react";
import Roupas from "../../components/Roupas";

const Masculino = props => {
	const roupaMasc = props.roupas.filter(valor => valor.tipo === "masculino");


	return <Roupas roupas={roupaMasc} />;
};

export default Masculino;
