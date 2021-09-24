import React from "react";
import Integrantes from "../components/Integrantes.";
import styled from 'styled-components'

const DivSobre = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 72vh;
	.integrantes{
		display: flex;
	}
`

const Sobre = (props) => {
	return (
		<DivSobre>
			<h1>Integrantes:</h1>
			<div className="integrantes">
				{props.integrantes.map((valor, i) =>
					<Integrantes key={i}
						nome={valor.nome}
						rm={valor.rm}
						turma={valor.turma}
						img={valor.img}
					/>
				)}
			</div>
		</DivSobre>
	)
}

export default Sobre