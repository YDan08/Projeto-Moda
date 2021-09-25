import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, FooterContent } from "./Rodape.styled";

const Rodape = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h3>Navegação</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/masculino">Masculino</Link>
          </li>
          <li>
            <Link to="/feminino">Feminino</Link>
          </li>
          <li>
            <Link to="/infatil">Infantil</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </FooterContent>
      <FooterContent>
        <h3>Contatos</h3>
        <h4>Endereço:</h4>
        <p>Av. Paulista, 1106 - 7º andar - Cerqueira César, São Paulo - SP, 01311-000</p>
        <h4>Telefone:</h4>
        <p>(11) 3385-8010</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Rodape;
