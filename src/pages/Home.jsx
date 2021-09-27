import React from "react";
import SimpleSlider from "../components/Carrossel";
import Roupas from "../components/Roupas";


const Home = (props) => {

	const roupas = props.roupas

	const limite = [29.9, 219.9]

	return (
		<>
			<SimpleSlider />
			<Roupas roupas={roupas} limite={limite} />
		</>
	)
}

export default Home