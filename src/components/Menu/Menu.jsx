import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import useScrollPosition from '@react-hook/window-scroll'
import { FaHome, FaTshirt, FaBaby, FaBars, } from "react-icons/fa";
import { GiDress } from "react-icons/gi";
import { FiInfo } from "react-icons/fi";
import { Header, MenuContainer, MenuResp } from "./Menu.styled";

const Menu = () => {
	const scrollY = useScrollPosition(60)

	const listar = () => {
		var menuRes = document.querySelector('ul')
		menuRes.classList.toggle("active")
	}

	return (
		<MenuContainer>
			<Header scrolled={scrollY >= 20}>
				<h1>
					<Link to="/">Vortechs Moda</Link>
				</h1>
				<MenuResp onClick={listar}>
					<FaBars className='barra' />
				</MenuResp>
				<ul >
					<li>
						<Link to="/">
							<Button>
								<FaHome className="icones" /> Home
							</Button>
						</Link>
					</li>
					<li>
						<Link to="/masculino">
							<Button>
								<FaTshirt className="icones" />
								Masculino
							</Button>
						</Link>
					</li>
					<li>
						<Link to="/feminino">
							<Button>
								<GiDress className="icones" /> Feminino
							</Button>
						</Link>
					</li>
					<li>
						<Link to="/infatil">
							<Button>
								<FaBaby className="icones" /> Infantil
							</Button>
						</Link>
					</li>
					<li>
						<Link to="/sobre">
							<Button>
								<FiInfo className="icones" /> Sobre
							</Button>
						</Link>
					</li>
				</ul>
			</Header>
		</MenuContainer>
	);
};

export default Menu;
