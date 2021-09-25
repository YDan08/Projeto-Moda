import React from "react";
import Integrantes from "../../components/Integrantes";
import { IntegrantesContent, SobreContainer } from "./Sobre.styled";

const Sobre = props => {
  return (
    <SobreContainer>
      <h1>Integrantes:</h1>
      <IntegrantesContent>
        {props.integrantes.map((valor, i) => (
          <Integrantes
            key={i}
            nome={valor.nome}
            rm={valor.rm}
            turma={valor.turma}
            img={valor.img}
          />
        ))}
      </IntegrantesContent>
    </SobreContainer>
  );
};

export default Sobre;
