import React, { useState } from "react";
import { Button, Slider } from "@material-ui/core";
import { CompraButton, Filtro, Item, RoupasContainer, RoupasContent } from './Roupas.styled'

const Roupas = props => {
  const listaRoupas = props.roupas;
  const [valor, setValor] = useState(0);
  const [lista, setLista] = useState(listaRoupas);

  const reset = () => {
    setValor(undefined)
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
            min={props.limite[0]}
            max={props.limite[1]}
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
            <p>R$ {valor.valor}</p>
            <CompraButton variant="outlined" className="MuiButton-root">Comprar</CompraButton>
          </Item>
        ))}
      </RoupasContent>
    </RoupasContainer>
  );
};

export default Roupas;
