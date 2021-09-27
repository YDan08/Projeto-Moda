import React, { useState } from "react";
import { Button, Slider } from "@material-ui/core";
import { CompraButton, Filtro, Item, RoupasContainer, RoupasContent } from './Roupas.styled'

const Roupas = props => {
	const listaRoupas = props.roupas;
	const [valor, setValor] = useState(0);
	const [lista, setLista] = useState(listaRoupas);

	const sorted = listaRoupas.sort((a, b) => a.valor > b.valor ? 1 : -1)
	const min = sorted[0]
	const max = sorted.reverse()[0]

	const reset = () => {
		setValor(0)
		setLista(listaRoupas)
	};

	const pegarValor = (_event, newValue) => {
		setValor(newValue);
		filtrar()
	};

	const filtrar = () => {
		const roupasFiltradas = listaRoupas.filter(lista => valor >= lista.valor)
		setLista(roupasFiltradas);
	}

	return (
		<RoupasContainer>
			<h1>Roupas:</h1>
			<Filtro>
				<div>
					<label>Filtrar por preço:</label>
					<Slider
						defaultValue={30}
						value={valor}
						onChange={pegarValor}
						name="slider"
						aria-label="Small"
						valueLabelDisplay="auto"
						min={min.valor}
						max={max.valor}
					/>
				</div>
				<Button onClick={() => filtrar()}>Buscar</Button>
				<Button onClick={() => reset()}>Resetar</Button>
			</Filtro>

			<RoupasContent>
				{lista.map((valor, i) => (
					<Item key={i}>
						<img src={valor.img} alt={valor.nome} />
						<h3>{valor.nome}</h3>
						<p>R$ {valor.valor + 0.09}</p>
						<CompraButton variant="outlined" className="MuiButton-root">Comprar</CompraButton>
					</Item>
				))}
			</RoupasContent>
		</RoupasContainer>
	);
};

export default Roupas;
