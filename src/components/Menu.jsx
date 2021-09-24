import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { FaHome, FaTshirt, FaBaby } from "react-icons/fa"
import { GiDress } from "react-icons/gi"
import { FiInfo } from "react-icons/fi"

const Menu = () => {
	const [mudarBackground, setBackground] = useState()

	useEffect(() => {
		function posicaoScroll() {
			if (window.scrollY > 20) {
				setBackground("#e7a699")
			} else {
				setBackground('')
			}
		}
		window.addEventListener('scroll', posicaoScroll)
	}, [])

	const DivMenu = styled.div`
	display: flex;
	position: fixed;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 50px;
	padding: 10px;
	top: 0%;
	h1 {
		a{
			color: black;
			text-decoration: none;
		}
	}
	ul{
		display: flex;
		align-items: center;

		li{
		list-style: none;
		margin-right: 10px;
		color: white;

			a{
				text-decoration: none;
				display: flex;
				align-items: center;
				.icones{
					margin-right: 5px;
				}
				.novaCor{
					color: wheat;
					margin-right: 5px;
				}
			}
		}
	}
	
`

	return (
		<DivMenu style={{ backgroundColor: mudarBackground }}>
			<h1><Link to="/">Vortechs Moda</Link></h1>
			<ul>
				<li><Link to="/" ><Button > <FaHome className={"icones"} /> Home</Button></Link></li>
				<li><Link to="/masculino" ><Button><FaTshirt className="icones" />Masculino</Button></Link></li>
				<li><Link to="/feminino" ><Button><GiDress className="icones" /> Feminino</Button></Link></li>
				<li><Link to="/infatil" ><Button><FaBaby className="icones" /> Infantil</Button></Link></li>
				<li><Link to="/sobre" ><Button><FiInfo className="icones" /> Sobre</Button></Link></li>
			</ul>
		</DivMenu>
	)
}

export default Menu