import React from "react";
import Roupas from "../../components/Roupas";

const Infantil = props => {
	const roupasInfantil = props.roupas.filter(valor => {
		return valor.tipo === "infantil";
	});


	return <Roupas roupas={roupasInfantil} />;
};

export default Infantil;
