import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { FaHome, FaTshirt, FaBaby } from "react-icons/fa"
import { GiDress } from "react-icons/gi"
import { FiInfo } from "react-icons/fi"

const Menu = () => {

	useEffect(() => {
		window.addEventListener('scroll', function () {
			var header = this.document.querySelector("header")
			header.classList.toggle("menu", this.window.scrollY > 0)
		})
	}, [])

	const DivMenu = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	top: 0%;
	header{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		padding: 10px;
		height: 50px;
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

				a{
					text-decoration: none;
					display: flex;
					align-items: center;
					.icones{
						margin-right: 5px;
					}
				}
			}
		}
	}
	.menu{
				background-color: #f1c4ba;
		h1{
			a{
				color: #f6f6f6;
			}
		}

		ul{
			li{
				a{
					button{
						color: #f6f6f6;
					}
					.icones{
						color: #f6f6f6;
					}
				}
			}
		}
	}
`

	return (
		<DivMenu >
			<header>
				<h1><Link to="/">Vortechs Moda</Link></h1>
				<ul>
					<li><Link to="/" ><Button > <FaHome className="icones" /> Home</Button></Link></li>
					<li><Link to="/masculino" ><Button><FaTshirt className="icones" />Masculino</Button></Link></li>
					<li><Link to="/feminino" ><Button><GiDress className="icones" /> Feminino</Button></Link></li>
					<li><Link to="/infatil" ><Button><FaBaby className="icones" /> Infantil</Button></Link></li>
					<li><Link to="/sobre" ><Button><FiInfo className="icones" /> Sobre</Button></Link></li>
				</ul>
			</header>
		</DivMenu>
	)
}

export default Menu