import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { FaHome, FaTshirt, FaBaby } from "react-icons/fa";
import { GiDress } from "react-icons/gi";
import { FiInfo } from "react-icons/fi";
import { Header, MenuContainer } from "./Menu.styled";

const Menu = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = this.document.querySelector("header");
      header.classList.toggle("menu", this.window.scrollY > 0);
    });
  }, []);

  return (
    <MenuContainer>
      <Header>
        <h1>
          <Link to="/">Vortechs Moda</Link>
        </h1>
        <ul>
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
