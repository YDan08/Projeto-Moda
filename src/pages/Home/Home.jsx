import React from "react";
import Carrossel from "../../components/Carrosel/Carrossel";
import Roupas from "../../components/Roupas";
import { CarroselContainer } from "./Home.styled";

const Home = props => {
	return (
		<>
			<CarroselContainer>
				<Carrossel />
			</CarroselContainer>
			<Roupas roupas={props.roupas} />
		</>
	);
};

export default Home;
