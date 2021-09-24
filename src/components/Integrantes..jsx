import React from "react";
import styled from "styled-components";

const DivIntegrantes = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img{
		width: 200px;
		border-radius: 20%;
		border: 2px solid #f1c4ba;
	}
`

const Integrantes = (props) => {

	return (
		<DivIntegrantes>
			<img src={props.img} alt="foto-aluno" />
			<h3>{props.nome}</h3>
			<p>RM: {props.rm} <br />
				Turma: {props.turma}</p>
		</DivIntegrantes>
	)
}

export default Integrantes