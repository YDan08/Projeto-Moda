import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Rodape = () => {

	const DivRodape = styled.div`
		.rodape{
			width: 100%;
			display: flex;
			justify-content: space-evenly;
			background-color: #e7a699;
			margin-top: 30px;
			color: #f6f6f6;
			.opRodape{
				width: 300px;
				h3{
					border-bottom: solid 1px #f6f6f6;
					
				}
				ul{
					align-items: center;	
					li{
							a{
								color: #f6f6f6;
								text-decoration: none;
								display: flex;
								align-items: center;
								
							}
					}
				h4{
					font-size: 7px;
				}
				}
			}
		}
	`

	return (
		<DivRodape>
			<footer className='rodape'>
				<div className='opRodape'>
					<h3>Navegação</h3>
					<ul>
						<li><Link to="/" >Home</Link></li>
						<li><Link to="/masculino" >Masculino</Link></li>
						<li><Link to="/feminino" >Feminino</Link></li>
						<li><Link to="/infatil" >Infantil</Link></li>
						<li><Link to="/sobre" >Sobre</Link></li>
					</ul>
				</div>
				<div className='opRodape'>
					<h3>Contatos</h3>
					<h4>Endereço:</h4>
					<p>Av. Paulista, 1106 - 7º andar - Cerqueira César, São Paulo - SP, 01311-000</p>
					<h4>Telefone:</h4>
					<p>(11) 3385-8010</p>
				</div>
			</footer>
		</DivRodape>
	)
}

export default Rodape