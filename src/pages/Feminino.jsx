import React from "react";
import Roupas from "../components/Roupas";


const Feminino = (props) => {
	const roupasFemi = props.roupas.filter(roupa => {
		return roupa.tipo.includes("feminino")
	})

	const limite = [59.9, 139.9]

	return (
		<>
			<Roupas roupas={roupasFemi} limite={limite} />
		</>
	)
}

export default Feminino