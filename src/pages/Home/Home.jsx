import React from "react";
import Carrossel from "../../components/Carrosel/Carrossel";
import Roupas from "../../components/Roupas";
import { CarroselContainer } from "./Home.styled";

const Home = props => {
  const limite = [29.9, 219.9];

  return (
    <>
      <CarroselContainer>
        <Carrossel />
      </CarroselContainer>
      <Roupas roupas={props.roupas} limite={limite} />
    </>
  );
};

export default Home;
