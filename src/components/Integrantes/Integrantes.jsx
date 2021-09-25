import React from "react";
import { CardContent } from "./Integrantes.styled";

const Integrantes = props => {
  return (
    <CardContent>
      <img src={props.img} alt="foto-aluno" />
      <h3>{props.nome}</h3>
      <p>
        RM: {props.rm}
        <br />
        Turma: {props.turma}
      </p>
    </CardContent>
  );
};

export default Integrantes;
