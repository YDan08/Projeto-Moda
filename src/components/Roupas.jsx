import React, { useState } from "react";
import styled from "styled-components";
import { Button, Slider } from "@material-ui/core";

const DivRoupas = styled.div`
  width: 90vw;
  margin: 90px auto 0;
  .filtro {
    width: 800px;
    margin: 60px auto;
  }
  .roupas {
    display: grid;
    width: 1500px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    .itens {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      padding: 10px;
      width: 450px;
      :hover {
        border: solid 1px #e7a699;
        border-radius: 20px;
      }
      img {
        width: 300px;
        border-radius: 20px;
      }
      h3 {
        width: 360px;
        font-size: small;
        text-align: center;
        margin: 13px 0 0;
        padding: 15px 15px 0px;
        border-top: solid 1px #e7a699;
      }
      p {
        span {
          color: #e7a699;
        }
      }
      .btn-compra {
        display: flex;
        padding: 10px;
        border: #e7a699 1px solid;
        background-color: transparent;
        cursor: pointer;
        :hover {
          background-color: #e7a699;
          color: white;
        }
      }
    }
  }
`;

const Roupas = props => {
  const [valor, setValor] = useState(0);
  const listaP = props.roupas;
  const [lista, setLista] = useState(listaP);

  const filtroValor = () => {
    setLista(listaP.filter(lista => lista.valor <= valor));
  };

  const reset = () => {
    setLista(listaP);
  };

  const pegarValor = e => {
    setValor(e);
  };

  return (
    <DivRoupas>
      <h1>Roupas:</h1>
      <div className="filtro">
        <h3>Filtro</h3>
        <div>
          <label>Preço:</label>
          <Slider
            className="slide"
            size="small"
            defaultValue={30}
            aria-label="Small"
            valueLabelDisplay="auto"
            getAriaValueText={pegarValor}
            name="slider"
            min={props.limite[0]}
            max={props.limite[1]}
          />
        </div>
        <Button onClick={filtroValor}>Buscar</Button>
        <Button onClick={reset}>reset</Button>
      </div>

      <div className="roupas">
        {lista.map((valor, i) => (
          <div className="itens" key={i}>
            <img src={valor.img} alt={valor.nome} />
            <h3>{valor.nome}</h3>
            <p>
              <span>R$ {valor.valor}</span>
            </p>
            <button className="btn-compra MuiButton-root">Comprar</button>
          </div>
        ))}
      </div>
    </DivRoupas>
  );
};

export default Roupas;
