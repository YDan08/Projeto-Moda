import React from "react";
import Roupas from "../../components/Roupas";

const Feminino = props => {
	const roupasFemi = props.roupas.filter(roupa => {
		return roupa.tipo === "feminino";
	});


	return <Roupas roupas={roupasFemi} />;
};

export default Feminino;
