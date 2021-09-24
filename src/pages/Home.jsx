import React from "react";
import SimpleSlider from "../components/Carrossel";
import Roupas from "../components/Roupas";


const Home = (props) => {

	const roupas = props.roupas
	/* 	const listaRoupas = roupas.sort(() => Math.random() - 0.5) */
	/*const lista = listaRoupas.slice(0, 6) */

	const limite = [29.9, 219.9]

	return (
		<>
			<SimpleSlider />
			<Roupas roupas={roupas} limite={limite} />
		</>
	)
}

export default Home