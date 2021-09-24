import React from "react";
import styled from "styled-components";
import Carrossel from "../components/Carrossel";
import Roupas from "../components/Roupas";

const DivHome = styled.div`
	#car{
		background-color: #f1c4ba;
	}
`

const Home = (props) => {

	const roupas = props.roupas
	/* 	const listaRoupas = roupas.sort(() => Math.random() - 0.5) */
	/*const lista = listaRoupas.slice(0, 6) */

	const limite = [29.9, 219.9]

	return (
		<DivHome>
			<div id="car">
				<Carrossel />
			</div>
			<Roupas roupas={roupas} limite={limite} />
		</DivHome>
	)
}

export default Home